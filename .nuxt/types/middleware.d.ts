import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "/Users/hom/home/framework/packages/nuxt/src/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}