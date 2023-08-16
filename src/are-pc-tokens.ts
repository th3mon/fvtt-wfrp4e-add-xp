export const arePCTokens = (tokens: Token[] | undefined) =>
  tokens?.every((token) => token.actor?.type === 'character');
