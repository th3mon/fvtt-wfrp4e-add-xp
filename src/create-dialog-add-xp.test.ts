import { describe, it, expect, beforeAll } from 'vitest';
import { createDialogAddXP } from './create-dialog-add-xp';

describe('createDialogAddXP', () => {
  beforeAll(() => {
    class Dialog {}
    const i18n = {
      localize: (key: string) => key,
    };
    // @ts-expect-error type
    globalThis.Dialog = Dialog;
    // @ts-expect-error type
    globalThis.game = {
      i18n,
    };
  });

  it('should exist', () => {
    expect(createDialogAddXP).toBeDefined();
  });

  it('should create dialog', () => {
    const add = () => {};
    const cancel = () => {};
    const dialog = createDialogAddXP(add, cancel);

    // @ts-expect-error type
    expect(dialog instanceof globalThis.Dialog).toBe(true);
  });
});
