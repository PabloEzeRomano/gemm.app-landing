/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.tsx' {
  const content: React.ComponentType<unknown>;
  export default content;
}

declare module '*.ts' {
  const content: Record<string, unknown>;
  export default content;
}
