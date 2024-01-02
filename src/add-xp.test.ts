import { describe, it, expect, beforeAll } from 'vitest';
import { addXP } from './add-xp';

describe('addXP', () => {
  beforeAll(() => {
    const i18n = {
      localize: (_: string) => 'Just gaining some XP',
    };
    // @ts-expect-error type
    globalThis.game = {
      i18n,
    };
  });

  it('should exist', () => {
    expect(addXP).toBeDefined();
  });

  it('add XP to one player', () => {
    // @ts-expect-error type
    globalThis.document = {
      getElementById: (id: string) => {
        const element = {
          value: '',
        };

        if (id === 'xp') {
          element.value = '100';
        } else if (id === 'reason') {
          element.value = 'Quest A';
        }

        return element as HTMLInputElement;
      },

      querySelector: () => null,
    };

    // @ts-expect-error type
    const token: Token = {
      actor: {
        details: {
          experience: {
            current: 100,
            total: 200,
          },
        },
        awardExp: (XP: number, reason: string) => {
          expect(XP).toBe(100);
          expect(reason).toBe('Quest A');
        },
      },
    } as Token;
    const selectedPlayers: Token[] = [token];

    addXP(selectedPlayers, 'ad-hoc');
  });

  it('add XP to one player using default values', () => {
    // @ts-expect-error type
    globalThis.document = {
      getElementById: (id: string) => {
        const element = {
          value: '',
        };

        if (id === 'xp' || id === 'reason') {
          element.value = '';
        }

        return element as HTMLInputElement;
      },

      querySelector: () => null,
    };

    // @ts-expect-error type
    const token: Token = {
      actor: {
        details: {
          experience: {
            current: 100,
            total: 200,
          },
        },
        awardExp: (XP: number, reason: string) => {
          expect(XP).toBe(20);
          expect(reason).toBe('Just gaining some XP');
        },
      },
    } as Token;
    const selectedPlayers: Token[] = [token];

    addXP(selectedPlayers, 'ad-hoc');
  });

  it('add short-term Ambition XP to one player', () => {
    // @ts-expect-error type
    globalThis.document = {
      getElementById: () => null,

      querySelector: (selector: string) => {
        const element = {
          value: '',
          dataset: {
            ambitionType: 'personal',
          },
        };

        if (selector === 'input[name="xp"]:checked') {
          element.value = '50';

          // @ts-expect-error type
          return element as HTMLInputElement;
        }

        // @ts-expect-error type
        return element as HTMLSpanElement;
      },
    };

    // @ts-expect-error type
    const token: Token = {
      actor: {
        details: {
          experience: {
            current: 100,
            total: 200,
          },
        },
        awardExp: (XP: number, reason: string) => {
          expect(XP).toBe(50);
          expect(reason).toBe('Short-term Ambition');
        },
      },
    } as Token;
    const selectedPlayers: Token[] = [token];

    addXP(selectedPlayers, 'ambitions');
  });

  it('add long-term Ambition XP to one player', () => {
    // @ts-expect-error type
    globalThis.document = {
      getElementById: () => null,

      querySelector: (selector: string) => {
        const element = {
          value: '',
          dataset: {
            ambitionType: 'personal',
          },
        };

        if (selector === 'input[name="xp"]:checked') {
          element.value = '500';

          // @ts-expect-error type
          return element as HTMLInputElement;
        }

        // @ts-expect-error type
        return element as HTMLSpanElement;
      },
    };

    // @ts-expect-error type
    const token: Token = {
      actor: {
        details: {
          experience: {
            current: 100,
            total: 200,
          },
        },
        awardExp: (XP: number, reason: string) => {
          expect(XP).toBe(500);
          expect(reason).toBe('Long-term Ambition');
        },
      },
    } as Token;
    const selectedPlayers: Token[] = [token];

    addXP(selectedPlayers, 'ambitions');
  });

  it('use personal ambition as short term reason from the character sheet', () => {
    // @ts-expect-error type
    globalThis.document = {
      getElementById: (id: string) => {
        const element = {
          value: '',
        };

        if (id === 'xp') {
          element.value = '50';
        }

        return element as HTMLInputElement;
      },

      querySelector: () => {
        const element = {
          value: '',
          dataset: {
            ambitionType: 'personal',
          },
        };

        // @ts-expect-error type
        return element as HTMLSpanElement;
      },
    };

    // @ts-expect-error type
    const token: Token = {
      actor: {
        details: {
          experience: {
            current: 100,
            total: 200,
          },
          ['personal-ambitions']: {
            ['short-term']: 'Quest A',
          },
        },
        awardExp: (XP: number, reason: string) => {
          expect(XP).toBe(50);
          expect(reason).toBe('Quest A');
        },
      },
    } as Token;
    const selectedPlayers: Token[] = [token];

    addXP(selectedPlayers, 'ambitions');
  });
});
