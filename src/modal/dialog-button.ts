export interface DialogButton<
  T = unknown,
  JQueryOrHtml = JQuery | HTMLElement
> {
  /**
   * A Font Awesome icon for the button
   */
  icon: string;

  /**
   * The label for the button
   */
  label: string;

  /**
   * Whether the button is disabled
   */
  disabled?: boolean;

  /**
   * A callback function that fires when the button is clicked
   */
  callback?: (html: JQueryOrHtml, event?: MouseEvent) => T;
}
