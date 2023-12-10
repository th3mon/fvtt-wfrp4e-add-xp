import { addXP } from './add-xp';
import { createDialogAddXP } from './create-dialog-add-xp';
import { getSelectedTokens } from './get-selected-tokens';

export async function adHocAddXP() {
  const { selectedTokens, errorMessage } = getSelectedTokens(canvas);

  if (errorMessage) {
    ui.notifications?.error(errorMessage);

    return;
  }

  const addXPCallback = () => addXP(selectedTokens);
  const cancelCallback = () => {};
  const dialog = createDialogAddXP(addXPCallback, cancelCallback);

  dialog.render(true);
}

export async function ambitionsAddXP() {
  ui.notifications?.info('Ambitions');
}
