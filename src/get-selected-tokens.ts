import { arePCTokens } from './are-pc-tokens';

export function getSelectedTokens(canvas: Canvas | undefined): {
  selectedTokens: Token[];
  errorMessage: string;
} {
  const selectedTokens = canvas?.tokens?.controlled || [];
  const errorMessage =
    !selectedTokens?.length && arePCTokens(selectedTokens)
      ? game.i18n.localize('wfrp4e.add-xp.message.error.select.player.token')
      : '';

  return { selectedTokens, errorMessage };
}
