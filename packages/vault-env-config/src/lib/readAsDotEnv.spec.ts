import { readAsDotEnv } from './readAsDotEnv';

describe(`readAsDotEnv`, () => {
  it('should read the specified values as dotEnv', async () => {
    const keyAsPath = 'lapis/data/vancouver-ocean-wise/whale-watch/local';
    const devEnv = await readAsDotEnv(keyAsPath, `${process.cwd()}/test.env`);
    console.log('devEnv: %j', devEnv);
    expect(devEnv).toBeDefined();
  });
});
