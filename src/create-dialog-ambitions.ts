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
        <input type="radio" id="personal-short-term-ambition" name="xp" value="50" checked data-ambition-type="personal">
        <span class="form-group__label">Personal Short Term Ambition | 50 XP</span>
      </label>
    </div>

    <div class="form-group">
      <label for="long-term">
        <input type="radio" id="personal-long-term-ambition" name="xp" value="500" data-ambition-type="personal">
        <span class="form-group__label">Personal Long Term Ambition | 500 XP</span>
      </label>
    </div>

    <div class="form-group">
      <label for="short-term">
        <input type="radio" id="party-short-term-ambition" name="xp" value="50" data-ambition-type="party">
        <span class="form-group__label">Party Short Term Ambition | 50 XP</span>
      </label>
    </div>

    <div class="form-group">
      <label for="long-term">
        <input type="radio" id="party-long-term-ambition" name="xp" value="500" data-ambition-type="party">
        <span class="form-group__label">Party Long Term Ambition | 500 XP</span>
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
