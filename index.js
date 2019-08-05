function writeCards (names, cause)
{
  let cards = [];
  for (let i = 0; i < names.length - 1; i++)
  {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${cause} gift.`);
  }
  return cards;
}
