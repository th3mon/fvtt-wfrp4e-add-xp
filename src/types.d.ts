declare global {
  interface Game {
    i18n: Localization;
  }

  interface Actor {
    awardExp(xp: number, reason: string): void;
  }

  var game: Game;

  type DialogCtor = { new (...args: any[]): any };

  var Dialog: DialogCtor;
  var dialog: DialogCtor;

  interface Window {
    wfrpAddXp: unknown;
  }

  namespace globalThis {
    var wfrpAddXp: unknown;
  }
}

export {};
