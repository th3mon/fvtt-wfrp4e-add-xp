import { describe, it, expect, beforeAll } from 'vitest';
import { getSelectedTokens } from './get-selected-tokens';

describe('getTokens', () => {
  beforeAll(() => {
    const i18n = {
      localize: (key: string) => key,
    };
    // @ts-expect-error type
    globalThis.game = {
      i18n,
    };
  });

  it('should exist', () => {
    expect(getSelectedTokens).toBeDefined();
  });

  it('should return tokens', () => {
    const token = {
      actor: {
        type: 'character',
      },
    };
    const canvas = {
      tokens: {
        controlled: [token],
      },
    };

    const { selectedTokens } = getSelectedTokens(canvas as Canvas);

    expect(selectedTokens.length).toBeGreaterThan(0);
  });

  it('should not return tokens', () => {
    const canvasWithoutControlledTokens = {};

    const { errorMessage } = getSelectedTokens(
      canvasWithoutControlledTokens as Canvas
    );

    expect(errorMessage).toBeDefined();
  });
});
