import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // app: {
  //   baseURL: '/base/',
  // },
  nitro: {
    storage: {
      'redis': {
        driver: 'redis',
        /* redis connector options */
        port: 6379, // Redis port
        host: "127.0.0.1", // Redis host
        username: "", // needs Redis >= 6
        password: "",
        db: 0, // Defaults to 0
      },
    }
  }
})