import cardInfo from './cardInfo.json';

const CardProvider = (() => {
  const getCard = async (cardName) => {
    let cardObj = {};
    if (cardInfo.hasOwnProperty(cardName)) {
      cardObj = cardInfo[cardName];
    }

    if (cardName) {
      const cardImageName = `${cardName.replace(/ /g, '-').toLowerCase()}.png`;
      try {
        const cardImageFile = await import(`./img/${cardImageName}`);
        cardObj.image = cardImageFile.default;
      } catch {
        console.error(`No such card with name '${cardName}'`);
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
