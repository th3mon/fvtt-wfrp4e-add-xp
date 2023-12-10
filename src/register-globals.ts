import { AddXPType, main } from './main';

export const registerGlobals = () => {
  globalThis.wfrpAddXp = () => main(AddXPType.AdHoc);
  globalThis.ambitionsAddXP = () => main(AddXPType.Ambitions);
};
