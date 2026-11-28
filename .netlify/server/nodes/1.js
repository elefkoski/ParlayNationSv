

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9e138d8d.js","_app/immutable/chunks/scheduler.c4994d38.js","_app/immutable/chunks/index.3b77a6b7.js","_app/immutable/chunks/stores.5d91e626.js","_app/immutable/chunks/singletons.edeb4930.js","_app/immutable/chunks/index.07126387.js"];
export const stylesheets = [];
export const fonts = [];
