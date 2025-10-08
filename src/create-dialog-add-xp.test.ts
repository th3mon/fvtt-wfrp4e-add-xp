import { describe, it, expect } from 'vitest';
import { createDialogAddXP } from './create-dialog-add-xp';

describe('createDialogAddXP', () => {
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
