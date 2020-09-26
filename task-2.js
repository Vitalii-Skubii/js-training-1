const calculateEngravingPrice = (message, pricePerWord) => {
  let totalPrice = message.split(' ').length * pricePerWord;
  //   let totalPrice = messageArray * pricePerWord;

  console.log(totalPrice);
};

calculateEngravingPrice('hi hello goodbye', 57);
