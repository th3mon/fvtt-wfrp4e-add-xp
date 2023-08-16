import { arePCTokens } from './are-pc-tokens';

export function getSelectedTokens(canvas: Canvas | undefined): {
  selectedTokens: Token[];
  errorMessage: string;
} {
  const selectedTokens = canvas?.tokens?.controlled || [];
  const errorMessage =
    !selectedTokens?.length && arePCTokens(selectedTokens)
      ? 'Please select player character token'
      : '';

  return { selectedTokens, errorMessage };
}
