declare global {
  interface Game {
    i18n: Localization;
  }

  interface Actor {
    awardExp(xp: number, reason: string): void;
  }

  var game: Game;

  interface Window {
    wfrpAddXp: unknown;
  }

  namespace globalThis {
    var wfrpAddXp: unknown;
  }
}

export {};
