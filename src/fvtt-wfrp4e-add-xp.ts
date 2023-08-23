import './fvtt-wfrp4e-add-xp.scss';
import { registerGlobals } from './register-globals';

Hooks.on('ready', function () {
  registerGlobals();
});
