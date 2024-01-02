import { Ambitions, getAmbitions } from './ambitions/get-ambitions';
import { AddXPType, XPType } from './main';

export const hasAmbitions = (ambitions: Ambitions[]): boolean => {
  const ambitionsOrEmptyValue: Ambitions | undefined = Array.from(
    ambitions,
  ).find((a: Ambitions) => a.shortTerm || a.longTerm);

  return Boolean(ambitionsOrEmptyValue);
};

const getPersonalOrPartyAmbitions = (): 0 | 1 => {
  const selector = '.form-group input[type="radio"]:checked';
  const element: HTMLSpanElement = document.querySelector(
    selector,
  ) as HTMLSpanElement;
  const ambitionType = element?.dataset.ambitionType;

  switch (ambitionType) {
    case 'personal':
      return 0;
    case 'party':
      return 1;
    default:
      return 0;
  }
};

const getAmbitionsReason = (
  actor: Actor,
  XP: number,
  addXPFor: XPType,
): string => {
  const personalOrPartyAmbitions: 0 | 1 = getPersonalOrPartyAmbitions();

  if (addXPFor !== 'ambitions') {
    return '';
  }

  const defaultAmbitions: {
    [key: number]: string;
  } = {
    50: 'Short-term Ambition',
    500: 'Long-term Ambition',
  };

  const ambitions: Ambitions[] = getAmbitions(actor);

  if (hasAmbitions(ambitions)) {
    const ambitionsTypes: {
      [key: number]: string;
    } = {
      50: 'shortTerm',
      500: 'longTerm',
    };

    const ambitionType: string = ambitionsTypes[XP];

    return ambitions[personalOrPartyAmbitions][ambitionType];
  }

  return defaultAmbitions[XP];
};

export const addXP = (selectedTokens: Token[], addXPFor: XPType): void => {
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
  ): string =>
    getAmbitionsReason(actor, XP, addXPFor) ||
    reasonInput?.value ||
    defaults.reason;

  // TODO: Add token types
  selectedTokens.forEach((token) => {
    const reason = getReason(token.actor, XP, getReasonInput());

    token.actor?.awardExp(XP, reason);
  });
};
