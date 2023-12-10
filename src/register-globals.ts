import { adHocAddXP } from './main';

export const registerGlobals = () => {
  globalThis.wfrpAddXp = adHocAddXP;
  globalThis.adHocAddXP = adHocAddXP;
};
