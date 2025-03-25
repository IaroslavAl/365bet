/// <reference types="vite/client" />

declare interface ImportMeta {
    glob: (pattern: string, options?: { eager?: boolean }) => Record<string, any>;
}