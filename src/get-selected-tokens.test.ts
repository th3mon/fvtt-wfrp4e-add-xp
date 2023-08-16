import { describe, it, expect } from 'vitest';
import { getSelectedTokens } from './get-selected-tokens';

describe('getTokens', () => {
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
