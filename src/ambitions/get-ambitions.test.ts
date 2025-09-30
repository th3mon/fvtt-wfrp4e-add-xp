import { describe, it, expect } from 'vitest';
import { Ambitions, getAmbitions } from './get-ambitions';
import { hasAmbitions } from '../add-xp';

describe('hasAmbitions', () => {
  it('should return true if the actor has personal ambitions', () => {
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
    } as unknown as Document;

    const selectedPlayer: Prettify<Token> = {
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
      },
    } as unknown as Token;

    const actor = selectedPlayer!.actor;

    if (actor) {
      const ambitions: Ambitions[] = getAmbitions(actor);

      expect(hasAmbitions(ambitions)).toBe(true);
    }
  });

  it('should return false if the actor does not have personal ambitions', () => {
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
    } as unknown as Document;

    const selectedPlayer: Token = {
      actor: {
        details: {
          experience: {
            current: 100,
            total: 200,
          },
        },
      },
    } as unknown as Token;

    const actor = selectedPlayer!.actor;

    if (actor) {
      const ambitions: Ambitions[] = getAmbitions(actor);

      expect(hasAmbitions(ambitions)).toBe(false);
    }
  });
});
