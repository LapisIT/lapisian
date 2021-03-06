#!/usr/bin/env bash
set -o errexit -o noclobber -o nounset -o pipefail

git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"

# This script uses the parent version as the version to publish a library with

getBuildType() {
  local release_type="minor"
  if [[ "$1" == *"major"* ]]; then
    release_type="major"
  elif [[ "$1" == *"fix"* || "$1" == *"docs"* || "$1" == *"chore"* ]]; then
    release_type="patch"
  fi
  echo "$release_type"
}

PARENT_DIR="$PWD"
ROOT_DIR="."
echo "Removing Dist"
rm -rf "${ROOT_DIR:?}/dist"

COMMIT_MESSAGE="$(git log -1 --pretty=format:"%s")"
RELEASE_TYPE=${1:-$(getBuildType "$COMMIT_MESSAGE")}
DRY_RUN=${DRY_RUN:-"False"}

AFFECTED=$(node node_modules/.bin/nx affected:libs --base=HEAD~1 --head=HEAD --plain)
AFFECTED=${AFFECTED//[$'\t\r\n']}
echo "--base=HEAD~1: '$AFFECTED'"

AFFECTED=" vault-env-config "
echo "Hardcoded AFFECTED: '$AFFECTED'"

if [ "$AFFECTED" != "" ]; then
  cd "$PARENT_DIR"
  echo "Copy Environment Files"
  for lib in $AFFECTED
  do
    echo "Setting version '$RELEASE_TYPE' for $lib '$ROOT_DIR/packages/${lib}'"
    cd "$PARENT_DIR"
    cd "$ROOT_DIR/packages/${lib}"
    npm version "$RELEASE_TYPE" -f -m "Release $RELEASE_TYPE"
    echo "Building $lib"
    cd "$PARENT_DIR"
    npm run build "$lib" -- --with-deps #--prod
    wait
  done

  cd "$PARENT_DIR"
  for lib in $AFFECTED
  do
    if [ "$DRY_RUN" == "False" ]; then
      echo "Publishing $lib"
      npm publish "$ROOT_DIR/dist/packages/${lib}" --access=public
    else
      echo "Dry Run, not publishing $lib"
    fi
    wait
  done
else
  echo "No Libraries to publish"
fi
