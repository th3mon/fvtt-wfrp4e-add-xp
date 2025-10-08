# Add XP Macro (WFRP4e)

Utility module for Foundry VTT GMs running **Warhammer Fantasy Roleplay 4th Edition (WFRP4e)**. It provides a macro that lets you award XP to selected player character tokens from a small dialog.

## Features

- Adds a global macro function: `wfrpAddXp()`
- Awards XP to all selected PC tokens
- Lets you enter XP amount and reason
- Uses localized labels/messages (English and Polish)
- Defaults to **20 XP** and a localized default reason when fields are left empty

## Compatibility

- Foundry VTT: **10–13** (verified: 13)
- WFRP4e system: **6.5.7–9.x** (verified: 9.2.2)

## Installation

Install the module in Foundry VTT using the manifest URL from the project releases:

<https://github.com/th3mon/fvtt-wfrp4e-add-xp/releases>

## Documentation

Detailed usage instructions are available in the [`docs/`](docs/) directory:

- [English manual](docs/manual.en.md)
- [Polska instrukcja](docs/manual.pl.md)

## Usage

1. Enable the module in your world.
2. Drag the macro from the **Add XP Macros** compendium to your macro bar, or create a macro that runs:

   ```js
   wfrpAddXp();
   ```

3. Select one or more player character tokens on the canvas.
4. Run the macro.
5. Enter the XP value and reason, then confirm.

If you leave the fields empty, the module awards **20 XP** with the default reason.

## Development

```bash
npm install
npm run dev      # Vite watch/dev workflow
npm run build    # TypeScript + Vite build
npm test         # Run Vitest tests
```

## License

MIT — see [LICENSE](LICENSE).
