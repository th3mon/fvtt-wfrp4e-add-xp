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

function addXP(selectedTokens) {
  // INFO:
  // Get XP and Reason
  const XP = parseInt(document.getElementById('xp')?.value);
  const reason = document.getElementById('reason')?.value;

  console.log({ XP, reason });

  // INFO:
  // add XP
  // 1. Get PC
  console.log(selectedTokens);

  selectedTokens.forEach((token) => {
    // INFO:
    // 2. Get XPTotal and current XP
    // 3. Add current XP to XP Total
    const XPTotal = token.actor.details.experience.total;
    const newXPTotal = XPTotal + XP;
    const currentXP = token.actor.details.experience.current;
    const newCurrentXP = currentXP + XP;

    console.log({ XPTotal, newXPTotal, currentXP, newCurrentXP });

    // INFO:
    // 4. Update actor -> pc.actor.awardExp(XP, reason)
    token.actor.awardExp(XP, reason);
  });
}

try {
  await main();
} catch (error) {
  console.error(error);
}
