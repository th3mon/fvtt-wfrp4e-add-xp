import { addXP } from './add-xp';
import { createDialogAddXP } from './create-dialog-add-xp';
import { createDialogAmbitions } from './create-dialog-ambitions';
import { getSelectedTokens } from './get-selected-tokens';

export type XPType = 'ambitions' | 'ad-hoc';

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
      return showDialogAdHoc(selectedTokens);

    case AddXPType.Ambitions:
      return showDialogAmbitions(selectedTokens);

    default:
      // TODO: Create meaningful error message
      return ui.notifications?.error('Not implemented');
  }
}

// TODO: Move showDialogAdHoc() to the own file
async function showDialogAdHoc(selectedTokens: Token[]) {
  const addXPCallback = () => addXP(selectedTokens, 'ad-hoc');
  const cancelCallback = () => {};
  const dialog = createDialogAddXP(addXPCallback, cancelCallback);

  dialog.render(true);
}

// TODO: Move showDialogAmbitions() to the own file
async function showDialogAmbitions(selectedTokens: Token[]) {
  const addXPCallback = () => addXP(selectedTokens, 'ambitions');
  const cancelCallback = () => {};
  const dialog = createDialogAmbitions(addXPCallback, cancelCallback);

  dialog.render(true);
}
