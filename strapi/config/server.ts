export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS') || ['generatedKey1', 'generatedKey2', 'generatedKey3', 'generatedKey4'],
  },
});
