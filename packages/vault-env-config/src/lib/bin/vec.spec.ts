import { vaultEnvConfig } from './vault-env-config';

describe('vaultEnv', () => {
  it('should work', async () => {
    const devEnv = await vaultEnvConfig();
    console.log('devEnv: %j', devEnv);
    expect(devEnv).toBeDefined()
  });
});
