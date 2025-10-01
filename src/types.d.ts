declare global {
  interface Game {
    i18n: {
      localize(key: string): string;
    };
  }

  interface Actor {
    awardExp(xp: number, reason: string): void;
  }

  var game: Game;

  interface Token {
    actor?: Actor;
  }

  interface Canvas {
    tokens?: {
      controlled: Token[];
    };
  }

  interface Dialog {
    new (options: {
      title: string;
      content: string;
      buttons: Record<
        string,
        {
          icon: string;
          label: string;
          callback: () => void;
        }
      >;
      default: string;
    }): Dialog;
  }

  interface Window {
    wfrpAddXp: unknown;
  }

  namespace globalThis {
    var wfrpAddXp: unknown;
  }
}

export {};
