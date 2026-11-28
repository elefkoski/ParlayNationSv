

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e1cb01f9.js","_app/immutable/chunks/scheduler.c4994d38.js","_app/immutable/chunks/index.3b77a6b7.js","_app/immutable/chunks/stores.cce94bfe.js","_app/immutable/chunks/singletons.97627f7c.js","_app/immutable/chunks/index.07126387.js"];
export const stylesheets = [];
export const fonts = [];
