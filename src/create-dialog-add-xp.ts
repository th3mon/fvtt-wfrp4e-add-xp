export const createDialogAddXP = (
  add: () => void,
  cancel: () => void
): Dialog => {
  // TODO: Move texts into lang files
  const content = `
    <div class="form-group">
    <label for="xp">XP</label>
    <input type="number" id="xp" name="xp">
    </div>
    <div class="form-group">
    <label for="reason">Reason</label>
    <input type="text" id="reason" name="reason">
    </div>
  `;

  return new Dialog({
    title: 'Add XP',
    content,
    buttons: {
      add: {
        icon: '<i class="fas fa-check"></i>',
        label: game.i18n.localize('wfrp4e.add-xp.modal.button.ok.label'),
        callback: add,
      },
      cancel: {
        icon: '<i class="fas fa-times"></i>',
        label: game.i18n.localize('wfrp4e.add-xp.modal.button.cancel.label'),
        callback: cancel,
      },
    },
    default: 'add',
  });
};
