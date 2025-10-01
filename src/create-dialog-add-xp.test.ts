import { describe, it, expect, beforeAll } from 'vitest';
import { createDialogAddXP } from './create-dialog-add-xp';

describe('createDialogAddXP', () => {
  beforeAll(() => {
    const game = {
      i18n: {
        localize: (key: string) => key,
      },
    } as unknown as Game;

    globalThis.dialog = Dialog;

    globalThis.game = game;
  });

  it('should exist', () => {
    expect(createDialogAddXP).toBeDefined();
  });

  it('should create dialog', () => {
    const add = () => {};
    const cancel = () => {};
    const dialog = createDialogAddXP(add, cancel);

    expect(dialog instanceof globalThis.dialog).toBe(true);
  });
});
