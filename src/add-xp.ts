async function main() {
  const selectedTokens = canvas?.tokens?.controlled;
  const arePCTokens = (tokens) =>
    tokens?.every((token) => token.actor?.type === 'character');

  if (!selectedTokens?.length && arePCTokens(selected)) {
    ui.notifications?.error('Please select player character token');

    return;
  }

  const d = new Dialog({
    title: 'Add XP',
    content: `
      <div class="form-group">
        <label for="xp">XP</label>
        <input type="number" id="xp" name="xp">
      </div>
      <div class="form-group">
        <label for="reason">Reason</label>
        <input type="text" id="reason" name="reason">
      </div>
    `,
    buttons: {
      add: {
        icon: '<i class="fas fa-check"></i>',
        label: game.i18n.localize('wfrp4e.add-xp.modal.button.ok.label'),
        callback: () => addXP(selectedTokens),
      },
      cancel: {
        icon: '<i class="fas fa-times"></i>',
        label: game.i18n.localize('wfrp4e.add-xp.modal.button.cancel.label'),
        callback: () => {},
      },
    },
    default: 'add',
  });
  d.render(true);
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
