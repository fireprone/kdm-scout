import cardInfo from './cardInfo.json';

const CardProvider = (() => {
  const getCard = async (cardName) => {
    let cardObj = {};
    if (cardInfo.hasOwnProperty(cardName)) {
      cardObj = cardInfo[cardName];
    }

    if (cardName !== '') {
      const cardImageName = `${cardName.replace(/ /g, '-').toLowerCase()}.png`;
      const cardImageFile = await import(`./img/${cardImageName}`);
      cardObj.image = cardImageFile.default;
    } else {
      cardObj.image = '';
    }

    return cardObj;
  };

  return { getCard };
})();

export default CardProvider;
