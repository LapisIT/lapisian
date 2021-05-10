import * as dotenv from 'dotenv';
dotenv.config();

import { dotEnvToKeyValues } from './dotEnvToKeyValues';

describe(`dotEnvToJson`, () => {
  it('should read the specified values as dotEnv', async () => {
    const keyAsPath = 'lapis/data/vancouver-ocean-wise/whale-watch/local';
    const devEnv = await dotEnvToKeyValues(`${process.cwd()}/test.env`);
    console.log('devEnv: %j', devEnv);
    expect(devEnv).toBeDefined();
  });

});
