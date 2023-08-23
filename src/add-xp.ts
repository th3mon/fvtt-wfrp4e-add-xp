export const addXP = (selectedTokens: Token[]): void => {
  const defaults = {
    XP: 20,
    reason: 'Just gaining some XP',
  };

  const XPInput: HTMLInputElement = document.getElementById(
    'xp'
  ) as HTMLInputElement;
  const XP = parseInt(XPInput?.value) || defaults.XP;

  const reasonInput: HTMLInputElement = document.getElementById(
    'reason'
  ) as HTMLInputElement;
  const reason = reasonInput?.value || defaults.reason;

  // TODO: Add token types
  selectedTokens.forEach((token) => {
    token.actor?.awardExp(XP, reason);
  });
};
