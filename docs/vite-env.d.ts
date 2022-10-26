/// <reference types="vite/client" />

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions<Vue>;
  export default Component;
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions<Vue>;
  export default Component
}