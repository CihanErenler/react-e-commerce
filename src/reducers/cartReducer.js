import {
  ADD_TO_CART,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
  CLEAR_CART,
} from "../common/reducerTypes";

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempList = state.cart.filter((item) => item.id === id + color);
    console.log(tempList);

    if (tempList.length > 0) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id + color) {
          const newAmount = item.amount + amount;
          if (newAmount > item.stock) {
            return item.stock;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: [...tempCart] };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        stock: product.stock,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }
};

export default cartReducer;
