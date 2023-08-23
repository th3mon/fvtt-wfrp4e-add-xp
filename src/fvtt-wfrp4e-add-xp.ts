import { AdHoc, XPData } from './ad-hoc';
import { main } from './main';
import './fvtt-wfrp4e-add-xp.scss';

const addXP = ({ xp, reason }: XPData) => {
  console.log('Add XP', { xp, reason });
};

console.log('Hello World! This code runs immediately when the file is loaded.');

Hooks.on('init', function () {
  console.log(
    'This code runs once the Foundry VTT software begins its initialization workflow.'
  );
});

Hooks.on('ready', function () {
  globalThis.wfrpAddXp = main;

  console.log(
    'This code runs once core initialization is ready and game data is available.'
  );
});
