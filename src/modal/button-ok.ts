import { DialogButton } from './dialog-button';

export const okButton = (callback = () => console.log('OK')): DialogButton => ({
  icon: '<i class="fas fa-check"></i>',
  label: game.i18n.localize('wfrp4e.add-xp.modal.button.ok.label'),
  callback,
});
