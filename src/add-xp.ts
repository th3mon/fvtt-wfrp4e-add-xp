// actor.details['personal-ambitions']['short-term']
// actor.details['personal-ambitions']['long-term']
// actor.details['party-ambitions']['short-term']
// actor.details['party-ambitions']['long-term']
export type Ambitions = {
  shortTerm: string;
  longTerm: string;
  [key: string]: string;
};

export const hasAmbitions = (ambitions: Ambitions): boolean => {
  return Boolean(ambitions.shortTerm) || Boolean(ambitions.longTerm);
};

export const getPersonalAmbitions = (actor: Actor): Ambitions => {
  return {
    shortTerm:
      actor.details['personal-ambitions'] &&
      actor.details['personal-ambitions']['short-term'],
    longTerm:
      actor.details['personal-ambitions'] &&
      actor.details['personal-ambitions']['long-term'],
  };
};

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

  const getReasonInput = (): HTMLInputElement | null => {
    const ID = 'reason';
    const reasonInput: HTMLInputElement = document.getElementById(
      ID,
    ) as HTMLInputElement;

    return reasonInput;
  };

  const getReason = (
    actor: Actor,
    XP: number,
    reasonInput: HTMLInputElement | null,
  ): string => {
    const ambitions: Ambitions = getPersonalAmbitions(actor);

    // INFO: Get ambitions reason
    // INFO: Propably mapping reason for ambitions based on XP is fragile
    if (hasAmbitions(ambitions)) {
      type AmbitionsTypes = {
        [key: number]: 'shortTerm' | 'longTerm';
      };
      const ambitionsTypes: AmbitionsTypes = {
        50: 'shortTerm',
        500: 'longTerm',
      };

      const ambitionType: string = ambitionsTypes[XP];

      return ambitions[ambitionType] || defaults.reason;
    } else if (XP === 50) {
      return 'Short-term Ambition';
    } else if (XP === 500) {
      return 'Long-term Ambition';
    }

    return reasonInput?.value || defaults.reason;
  };

  // TODO: Add token types
  selectedTokens.forEach((token) => {
    const reason = getReason(token.actor, XP, getReasonInput());

    token.actor?.awardExp(XP, reason);
  });
};
