import cardInfo from './cardInfo.json';

const CardProvider = (() => {
  const getCard = async (cardName) => {
    let cardObj = {};
    cardName = cardName.toUpperCase();

    if (cardName) {
      const cardImageName = `${cardName.replace(/ /g, '-').toLowerCase()}.png`;
      let cardImagePath = '';

      if (!cardInfo.hasOwnProperty(cardName)) {
        cardImagePath = `./img/${cardImageName}`;
      } else {
        cardObj = cardInfo[cardName];
        const cardImageName = `${cardName
          .replace(/ /g, '-')
          .toLowerCase()}.png`;
        const cardImageOrigin = `${cardObj.Origin.replace(/ /g, '')}`;
        cardImagePath = `./img/${cardImageOrigin}/${cardImageName}`;
      }

      try {
        const cardImageFile = await import(`${cardImagePath}`);
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
