import {
  ADD_TO_CART,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
  CLEAR_CART,
  CALCULATE_ALL_CART,
  UPDATE_PAYMENT_CART,
  HANDLE_PAYMENT,
  HANDLE_ORDER,
} from "../common/reducerTypes";

const cartReducer = (state, action) => {
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

  if (action.type === HANDLE_PAYMENT) {
    return { ...state };
  }

  if (action.type === UPDATE_PAYMENT_CART) {
    const { name, value } = action.payload;
    let temp = value;

    if (name === "number") {
      temp = temp
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();

      if (temp.length > 19) temp.substring(temp.length - 1, 1);
    }

    const newState = {
      ...state,
      paymentCard: { ...state.paymentCard, [name]: temp },
    };
    return { ...newState };
  }

  if (action.type === HANDLE_ORDER) {
    const { actionType, value } = action.payload;
    console.log("girdi");

    if (actionType === "process") return { ...state, processing: value };
    if (actionType === "order") {
      localStorage.clear();
      return {
        ...state,
        ordered: value,
        cart: [],
        paymentCard: {
          name: "",
          number: "",
          month: "Month",
          year: "Year",
          securityCode: "",
        },
      };
    }
    if (actionType === "clear") {
      return { ...state, ordered: value, processing: value };
    }

    return { ...state };
  }
};

export default cartReducer;
