import * as R from 'ramda';
const { when, isNil, equals, complement, curry } = R;

/**
 * curry, hence the value must exist!
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exitWithErrorMsg = curry((msg, value) => {
  throw Error(msg);
})

const isNotZero = complement(equals(0));

/**
 * Evaluate a state of a value (the last arg) by calling a function to evaluate (1st arg);
 * present the message (2nd arg) if the evaluation fails and exit with shelljs.exit(1)
 * @type {any}
 */
const failWhen = curry((toEvaluate, msg, value) => when(toEvaluate, exitWithErrorMsg(msg))(value));
/**
 * Exit if a value is Nil
 */
export const failIfNil = failWhen(isNil);
/**
 * Exit if a value is not 0
 */
export const failIfNotZero = failWhen(isNotZero);
