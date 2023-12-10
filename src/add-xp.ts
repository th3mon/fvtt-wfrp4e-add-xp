export const addXP = (selectedTokens: Token[]): void => {
  const defaults = {
    XP: 20,
    reason: game.i18n.localize('wfrp4e.add-xp.modal.value.defaults.reason'),
  };

  const getXPInput = (): HTMLInputElement | null => {
    const ID = 'xp';
    const selector = `input[name="${ID}"]:checked`;

    return (
      (document.getElementById(ID) as HTMLInputElement) ||
      (document.querySelector(selector) as HTMLInputElement)
    );
  };

  const getValue = (input: HTMLInputElement | null): number => {
    const valueAsString = String(input?.value) || '';

    return parseInt(valueAsString) || defaults.XP;
  };

  const XPInput: HTMLInputElement | null = getXPInput();
  const XP: number = getValue(XPInput);

  const getReasonInput = (XP: number | null): HTMLInputElement | null => {
    const ID = mapXPToReasonID(XP);
    const reasonInput: HTMLInputElement = document.getElementById(
      ID,
    ) as HTMLInputElement;

    return reasonInput;
  };

  const mapXPToReasonID = (XP: number | null): string => {
    // INFO: Prawdpodobnie mapowanie po XP === 50 nie jest dobry rowiazaniem.
    // Jest to short term solution.
    if (XP === 50) {
      return 'short-term-reason';
    }

    if (XP === 500) {
      return 'long-term-reason';
    }

    return 'reason';
  };

  const reason = getReasonInput(XP)?.value || defaults.reason;

  // TODO: Add token types
  selectedTokens.forEach((token) => {
    token.actor?.awardExp(XP, reason);
  });
};
