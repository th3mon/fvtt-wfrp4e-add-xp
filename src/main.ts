import { addXP } from './add-xp';
import { createDialogAddXP } from './create-dialog-add-xp';
import { getSelectedTokens } from './get-selected-tokens';

export async function main() {
  const { selectedTokens, errorMessage } = getSelectedTokens(canvas);

  if (errorMessage) {
    ui.notifications?.error(errorMessage);

    return;
  }

  const dialog = createDialogAddXP(
    () => addXP(selectedTokens),
    () => {}
  );
  dialog.render(true);
}
