async function addXp() {
  const selected = canvas?.tokens?.controlled;
  const arePCTokens = (tokens) =>
    tokens?.every((token) => token.actor?.type === 'character');

  if (!selected?.length && arePCTokens(selected)) {
    ui.notifications?.error('Please select player character token');

    return;
  }
}

try {
  await addXp();
} catch (error) {
  console.error(error);
}
