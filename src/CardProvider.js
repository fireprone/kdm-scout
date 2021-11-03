import cardInfo from './cardInfo.json';

const CardProvider = (() => {
  const getCard = async (cardName) => {
    let cardObj = {};
    cardName = cardName.toUpperCase();

    if (cardName && cardInfo.hasOwnProperty(cardName)) {
      cardObj = cardInfo[cardName];
      const cardImageName = `${cardName.replace(/ /g, '-').toLowerCase()}.png`;
      const cardImageOrigin = `${cardObj.origin.replace(/ /g, '')}`;
      try {
        const cardImageFile = await import(
          `./img/${cardImageOrigin}/${cardImageName}`
        );
        cardObj.image = cardImageFile.default;
      } catch {
        console.error(`Failed to import card with name of '${cardName}'`);
        cardObj.image = '';
      }
    } else {
      cardObj.image = '';
    }

    return cardObj;
  };

  return { getCard };
})();

export default CardProvider;
