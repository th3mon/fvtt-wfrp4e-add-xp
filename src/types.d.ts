interface Wfrp4eActorSystem {
  awardExp(xp: number, reason: string): void;
}

declare global {
  interface Game {
    i18n: Localization;
  }

  interface Actor {
    system: Wfrp4eActorSystem;
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
