import { describe, it, expect } from 'vitest';
import { arePCTokens } from './are-pc-tokens';

describe('arePCTokens()', () => {
  it('should exist', () => {
    expect(arePCTokens).toBeDefined();
  });

  it('should be true', () => {
    const tokens = [
      {
        actor: {
          type: 'character',
        },
      },
    ];

    expect(arePCTokens(tokens as Token[])).toBe(true);
  });

  it('should be false when tokens are empty', () => {
    const tokens = [{}];

    expect(arePCTokens(tokens as Token[])).toBe(false);
  });

  it('should be false when actor is not a character', () => {
    const tokens = [
      {
        actor: {
          type: 'npc',
        },
      },
    ];

    expect(arePCTokens(tokens as Token[])).toBe(false);
  });
});
