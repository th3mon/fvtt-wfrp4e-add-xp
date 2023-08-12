import { cancelButton } from './modal/button-cancel';
import { okButton } from './modal/button-ok';
import { DialogButton } from './modal/dialog-button';

export type XPData = {
  xp: Number;
  reason: string;
};

export class AdHoc {
  public title: string = game.i18n.localize('wfrp4e.add-xp.modal.add-xp.title');
  public content: string;
  public buttons: {
    cancelButton: DialogButton<unknown, HTMLElement | JQuery<HTMLElement>>;
    okButton: DialogButton<unknown, HTMLElement | JQuery<HTMLElement>>;
  };
  public xp: Number = 0;
  public reason: string = '';

  private xpID: string = 'wfrp4e-xp';
  private reasonID: string = 'wfrp4e-reason';
  private $xpInput: JQuery<HTMLInputElement> | null = null;
  private $reasonInput: JQuery<HTMLInputElement> | null = null;
  private handlers: {
    [eventName: string]: (data: XPData) => void;
  } | null;

  constructor() {
    this.content = this.renderAdHocModalContent();
    this.buttons = {
      cancelButton: cancelButton(),
      okButton: okButton(() => this.onOk()),
    };
    this.handlers = {};
  }

  public on(eventName: string, handler: (data: XPData) => void): void {
    if (this.handlers) {
      this.handlers[eventName] = handler;
    }
  }

  public onRender = (element: HTMLElement | JQuery<HTMLElement>): void => {
    this.$xpInput = (<any>element).find(`#${this.xpID}`);
    this.$reasonInput = (<any>element).find(`#${this.reasonID}`);

    this.$xpInput?.on('change', ({ target }) => {
      this.xp = Number(target.value);
    });

    this.$reasonInput?.on('change', ({ target }) => {
      this.reason = target.value;
    });
  };

  public onClose = (): void => {
    this.$xpInput?.off('change');
    this.$reasonInput?.off('change');
    this.off();
  };

  private off(): void {
    this.handlers = null;
  }

  private renderAdHocModalContent(): string {
    const xpInput = `<label for="${this.xpID}">XP</label><input id="${this.xpID}" type="text" />`;
    const reasonInput = `<label for="${this.reasonID}">Reason</label><input id="${this.reasonID}" type="text" />`;

    return `<div class="wfrp4e-add-xp">${xpInput}${reasonInput}</div>`;
  }

  private onOk(): void {
    this.handlers?.ok({
      xp: this.xp,
      reason: this.reason,
    });
  }
}
