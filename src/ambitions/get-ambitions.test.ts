import { describe, it, expect } from 'vitest';
import { Ambitions, getAmbitions } from './get-ambitions';
import { hasAmbitions } from '../add-xp';

describe('hasAmbitions', () => {
  it('should return true if the actor has personal ambitions', () => {
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
    };

    // @ts-expect-error type
    const selectedPlayer: Token = {
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
    } as Token;

    const ambitions: Ambitions[] = getAmbitions(selectedPlayer?.actor);

    expect(hasAmbitions(ambitions)).toBe(true);
  });

  it('should return false if the actor does not have personal ambitions', () => {
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
    };

    // @ts-expect-error type
    const selectedPlayer: Token = {
      actor: {
        details: {
          experience: {
            current: 100,
            total: 200,
          },
        },
      },
    } as Token;

    const ambitions = getAmbitions(selectedPlayer?.actor);

    expect(hasAmbitions(ambitions)).toBe(false);
  });
});
