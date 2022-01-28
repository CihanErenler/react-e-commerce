import {
  ADD_TO_CART,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
  CLEAR_CART,
  CALCULATE_ALL_CART,
} from "../common/reducerTypes";

const cartReducer = (state, action) => {
  console.log(state);
  if (action.type === CALCULATE_ALL_CART) {
    const newList = state.cart.reduce(
      (total, temp) => {
        total.price += temp.price * temp.amount;
        total.amount += temp.amount;

        return total;
      },
      { price: 0, amount: 0 }
    );

    return { ...state, totalAmount: newList.amount, totalItems: newList.price };
  }

  if (action.type === TOGGLE_AMOUNT) {
    const { type, id } = action.payload;

    const tempList = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount;
        if (type === "dicrease") {
          newAmount = item.amount - 1;

          if (newAmount < 1) {
            newAmount = item.amount;
          }
        }

        if (type === "increase") {
          newAmount = item.amount + 1;

          if (newAmount > item.stock) {
            newAmount = item.stock;
          }
        }
        return { ...item, amount: newAmount };
      }
      return item;
    });

    return { ...state, cart: tempList };
  }

  if (action.type === REMOVE_ITEM) {
    const newList = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newList };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], totalItems: 0, totalAmount: 0 };
  }

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
