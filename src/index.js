// only required for dev
// in prod, foundry loads index.js, which is compiled by vite/rollup
// in dev, foundry loads index.js, this file, which loads lancer.ts

window.global = window;
import './fvtt-wfrp4e-add-xp.ts';
