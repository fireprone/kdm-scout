const CardProvider = (() => {
  const cards = {
    'Founding Stone': {
      keywords: 'Weapon',
      speed: 2,
      accuracy: 7,
      strength: 1,
      origin: 'Starting Gear',
      terms: ['Archive'],
    },
    Cloth: {
      keywords: 'Armor',
      armor: 1,
      location: 'Waist',
      origin: 'Starting Gear',
      terms: [],
    },
  };

  const getCard = (cardName) => {
    return cards.hasOwnProperty(cardName) ? cards[cardName] : { terms: [] };
  };

  const getImagePath = (cardName) => {
    if (getCard(cardName)) {
      cardName = cardName.replace(/ /g, '-').toLowerCase();
      return `${cardName}.png`;
    }

    return null;
  };

  return { getCard, getImagePath };
})();

export default CardProvider;
