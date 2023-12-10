import { adHocAddXP, ambitionsAddXP } from './main';

export const registerGlobals = () => {
  globalThis.wfrpAddXp = adHocAddXP;
  globalThis.adHocAddXP = adHocAddXP;
  globalThis.ambitionsAddXP = ambitionsAddXP;
};
