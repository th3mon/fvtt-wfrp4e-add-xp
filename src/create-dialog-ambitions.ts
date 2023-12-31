export const createDialogAmbitions = (
  add: () => void,
  cancel: () => void,
): Dialog => {
  const title = 'Add XP | Ambitions';
  const okLabel = game.i18n.localize('wfrp4e.add-xp.modal.button.ok.label');
  const cancelLabel = game.i18n.localize(
    'wfrp4e.add-xp.modal.button.cancel.label',
  );

  const content = `
    <div class="form-group">
      <label for="short-term">
        <input type="radio" id="short-term" name="xp" value="50" checked>
        <span class="form-group__label">Short Term | 50 XP</span>
      </label>
    </div>

    <div class="form-group">
      <label for="long-term">
        <input type="radio" id="long-term" name="xp" value="500">
        <span class="form-group__label">Long Term | 500 XP</span>
      </label>
    </div>
  `;

  return new Dialog({
    title,
    content,
    buttons: {
      add: {
        icon: '<i class="fas fa-check"></i>',
        label: okLabel,
        callback: add,
      },
      cancel: {
        icon: '<i class="fas fa-times"></i>',
        label: cancelLabel,
        callback: cancel,
      },
    },
    default: 'add',
  });
};
