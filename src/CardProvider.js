const CardProvider = (() => {
  const cards = {
    'Founding Stone': {
      Keywords: 'Weapon',
      Speed: 2,
      Accuracy: 7,
      Strength: 1,
      Origin: 'Starting Gear',
      Definitions: ['Archive'],
    },
    Cloth: {
      Keywords: 'Armor',
      Armor: 1,
      Location: 'Waist',
      Origin: 'Starting Gear',
    },
  };

  const getCard = (cardName) => {
    return cards.hasOwnProperty(cardName) ? cards[cardName] : null;
  };

  const getImagePath = (cardName) => {
    if (getCard(cardName)) {
      cardName = cardName.replaceAll(' ', '-').toLowerCase();
      return `${cardName}.png`;
    }

    return null;
  };

  return { getCard, getImagePath };
})();

export default CardProvider;
