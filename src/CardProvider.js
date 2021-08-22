import cardInfo from './cardInfo.json';

const CardProvider = (() => {
  const getCard = (cardName) => {
    return cardInfo.hasOwnProperty(cardName)
      ? cardInfo[cardName]
      : { terms: [] };
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
