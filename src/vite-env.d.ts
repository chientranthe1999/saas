/// <reference types="vite/client" />
interface ImportMetaEnv extends Readonly<Record<string, string | undefined | boolean>> {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

//@ts-ignore
// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
