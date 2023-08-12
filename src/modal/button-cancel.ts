import { DialogButton } from './dialog-button';

export const cancelButton = (
  callback = () => console.log('Cancel')
): DialogButton => ({
  icon: '<i class="fas fa-times"></i>',
  label: game.i18n.localize('wfrp4e.add-xp.modal.button.cancel.label'),
  callback,
});
