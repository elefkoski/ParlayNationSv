

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.96e68f7a.js","_app/immutable/chunks/scheduler.c4994d38.js","_app/immutable/chunks/index.3b77a6b7.js","_app/immutable/chunks/Footer.5dbd9914.js","_app/immutable/chunks/theme.7c1f69b7.js","_app/immutable/chunks/index.07126387.js"];
export const stylesheets = ["_app/immutable/assets/app.1d21c312.css","_app/immutable/assets/colors.a27926eb.css"];
export const fonts = [];
