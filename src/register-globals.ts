import { main } from './main';

export const registerGlobals = () => {
  globalThis.wfrpAddXp = main;
};
