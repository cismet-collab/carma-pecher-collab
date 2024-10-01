export type GetLibVersion = () => string;
export type GetLibHash = () => string;
export type GetLibDescribe = () => string;
export type IsDirty = () => boolean;

declare module "./version" {
  export const getLibVersion: GetLibVersion;
  export const getLibHash: GetLibHash;
  export const getLibDescribe: GetLibDescribe;
  export const isDirty: IsDirty;
}
