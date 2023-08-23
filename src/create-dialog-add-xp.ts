export const createDialogAddXP = (
  add: () => void,
  cancel: () => void
): Dialog => {
  const xp = game.i18n.localize('wfrp4e.add-xp.modal.content.xp');
  const reason = game.i18n.localize('wfrp4e.add-xp.modal.content.reason');
  const title = game.i18n.localize('wfrp4e.add-xp.modal.title');
  const okLabel = game.i18n.localize('wfrp4e.add-xp.modal.button.ok.label');
  const cancelLabel = game.i18n.localize(
    'wfrp4e.add-xp.modal.button.cancel.label'
  );

  const content = `
    <div class="form-group">
      <label for="xp">${xp}</label>
      <input type="number" id="xp" name="xp">
    </div>
    <div class="form-group">
      <label for="reason">${reason}</label>
      <input type="text" id="reason" name="reason">
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
