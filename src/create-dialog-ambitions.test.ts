import { describe, it, expect, beforeAll } from 'vitest';
import { createDialogAmbitions } from './create-dialog-ambitions';

describe('createDialogAmbitions', () => {
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
    expect(createDialogAmbitions).toBeDefined();
  });

  it('should create a dialog', () => {
    const add = () => {};
    const cancel = () => {};
    const dialog = createDialogAmbitions(add, cancel);

    // @ts-expect-error type
    expect(dialog instanceof globalThis.Dialog).toBe(true);
  });
});
