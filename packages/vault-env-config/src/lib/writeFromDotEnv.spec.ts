import * as dotenv from 'dotenv';
dotenv.config();
process.env.DEBUG = 'node-vault';
import { writeFromDotEnv } from './writeFromDotEnv';
import { initVault } from './initVault';
import { path } from 'ramda';


describe(`writeFromDotEnv`, () => {

  /**
   node-vault GET https://svault.spatialvision.com.au/v1/sys/init +0ms
   node-vault 200 +144ms
   node-vault write { data: { foo: 'bar' } } to lapis/data/test +3ms
   node-vault PUT https://svault.spatialvision.com.au/v1/lapis/data/test +6ms
   node-vault { data: { foo: 'bar' } } +0ms
   node-vault 200 +133ms
   */
  it('should write foo', async () => {
    expect(process.env.VAULT_ADDR).toBeDefined();
    expect(process.env.VAULT_TOKEN).toBeDefined();
    console.log('process.env.VAULT_ADDR: %s, process.env.VAULT_TOKEN: %s, process.cwd(): %s',
      process.env.VAULT_ADDR,
      process.env.VAULT_TOKEN,
      process.cwd());

    const keyAsPath = 'lapis/data/test';
    const vault = await initVault();
    const res = await vault.write(keyAsPath, {
      data: {foo: 'bar'}
    });
    console.log('res: %j', res);
    expect(path(['data', 'created_time'],res)).toBeDefined();
  });

  it('should write the k/v fro a dotEnv file to Vault', async () => {
    expect(process.env.VAULT_ADDR).toBeDefined();
    expect(process.env.VAULT_TOKEN).toBeDefined();
    console.log('process.env.VAULT_ADDR: %s', process.env.VAULT_ADDR);
    const keyAsPath = 'lapis/data/lapisian/test';
    const res = await writeFromDotEnv(keyAsPath, `${process.cwd()}/test.env`);
    console.log('res: %j', res);
    expect(res).toBeDefined();
    expect(path(['data', 'created_time'],res)).toBeDefined();
  });

});
