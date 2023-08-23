import { main } from './main';
import './fvtt-wfrp4e-add-xp.scss';

Hooks.on('ready', function () {
  // TODO: Move this code into function. I'm sure the name should be register global(s)
  globalThis.wfrpAddXp = main;
});
