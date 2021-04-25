import { vaultEnv } from './vault-env';

describe('vaultEnv', () => {
  it('should work', async () => {
    const devEnv = await vaultEnv();
    console.log('devEnv: %j', devEnv);
    expect(devEnv).toBeDefined()
  });
});
