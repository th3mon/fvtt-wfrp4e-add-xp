import { addXP } from './add-xp';
import { createDialogAddXP } from './create-dialog-add-xp';
import { getSelectedTokens } from './get-selected-tokens';

type XPType = 'ambitions' | 'ad-hoc';

export enum AddXPType {
  Ambitions = 'ambitions',
  AdHoc = 'ad-hoc',
}

export async function main(addXPFor: XPType) {
  const { selectedTokens, errorMessage } = getSelectedTokens(canvas);

  if (errorMessage) {
    ui.notifications?.error(errorMessage);

    return;
  }

  switch (addXPFor) {
    case AddXPType.AdHoc:
      return adHocAddXP(selectedTokens);

    case AddXPType.Ambitions:
      return ambitionsAddXP();

    default:
      // TODO: Create meaningful error message
      return ui.notifications?.error('Not implemented');
  }
}

// TODO: Move adHocAddXP() to the own file
async function adHocAddXP(selectedTokens: Token[]) {
  const addXPCallback = () => addXP(selectedTokens);
  const cancelCallback = () => {};
  const dialog = createDialogAddXP(addXPCallback, cancelCallback);

  dialog.render(true);
}

// TODO: Move ambitionsAddXP() to the own file
async function ambitionsAddXP() {
  ui.notifications?.info('Ambitions');
}
