

export const index = 33;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/craps-simulator/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/33.d36210fb.js","_app/immutable/chunks/scheduler.c4994d38.js","_app/immutable/chunks/each.de670cd0.js","_app/immutable/chunks/index.3b77a6b7.js"];
export const stylesheets = ["_app/immutable/assets/33.42f14534.css"];
export const fonts = [];
