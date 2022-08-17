import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/hom/home/framework/packages/nuxt/src/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}