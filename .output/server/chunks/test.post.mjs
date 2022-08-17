import { u as useStorage } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'h3';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'unstorage/drivers/redis';
import 'fs';
import 'pathe';
import 'url';

const test_post = async (req, res) => {
  await useStorage().setItem("redis:nuxt3-redis", req.body);
  return "Success";
};

export { test_post as default };
//# sourceMappingURL=test.post.mjs.map
