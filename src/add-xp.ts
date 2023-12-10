export const addXP = (selectedTokens: Token[]): void => {
  const defaults = {
    XP: 20,
    reason: game.i18n.localize('wfrp4e.add-xp.modal.value.defaults.reason'),
  };

  const XPInput: HTMLInputElement = document.getElementById(
    'xp',
  ) as HTMLInputElement;
  const XP = parseInt(XPInput?.value) || defaults.XP;

  const value = document.querySelector('input[name="xp"]:checked')?.value;
  console.log({ value });

  const reasonInput: HTMLInputElement = document.getElementById(
    'reason',
  ) as HTMLInputElement;
  const reason = reasonInput?.value || defaults.reason;

  // TODO: Add token types
  selectedTokens.forEach((token) => {
    token.actor?.awardExp(XP, reason);
  });
};
