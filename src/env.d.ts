/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface ImportMetaEnv {
    readonly WP_API_URL: string;
    readonly NODE_API_URL: string;
    readonly BACKEND_API_URL: string;
  }
}
