class MockDialog {
  constructor(public options: any) {}

  render(): this {
    return this;
  }
}

(globalThis as any).Dialog = MockDialog;
(globalThis as any).dialog = MockDialog;

(globalThis as any).game = {
  i18n: { localize: (k: string) => k },
} as unknown as Game;
