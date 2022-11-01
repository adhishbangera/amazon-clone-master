export const initialState = {
  basket: [
    {
      id: "324",
      title: "Ipad",
      price: 999,
      rating: 4,
      image:
        "https://img6.gadgetsnow.com/gd/images/products/additional/large/G234508_View_1/mobiles/tablets/apple-ipad-pro-11-inch-2021-space-gray-128gb-8gb-ram-.jpg",
    },
  ],
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id:${action.id})`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
