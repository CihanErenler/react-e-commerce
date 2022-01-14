import {
  PRODUCTS_FETCHED,
  MAKE_GRID_LAYOUT,
  MAKE_LIST_LAYOUT,
  UPDATE_SORT,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  UPDATE_FILTER,
  CLEAR_FILTER,
  CLEAR_FILTER_INPUT,
} from "../common/reducerTypes";

const filterReducer = (state, action) => {
  if (action.type === PRODUCTS_FETCHED) {
    const maxPrice = Math.max(...action.payload.map((item) => item.price));
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filters: {
        ...state.filters,
        price: maxPrice,
        maxPrice,
      },
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { allProducts } = state;
    let temp = [...allProducts];
    const { value, category, company, colors, price, shipping } = state.filters;

    if (value) {
      temp = temp.filter((item) => item.name.toLowerCase().startsWith(value));
    }

    if (category !== "all") {
      temp = temp.filter((item) => item.category === category);
    }

    if (company !== "all") {
      temp = temp.filter((item) => item.company === company);
    }

    if (colors !== "all") {
      temp = temp.filter((item) => item.colors.includes(colors));
    }

    if (shipping) {
      temp = temp.filter((item) => item.shipping);
    }

    temp = temp.filter((item) => item.price <= price);

    return { ...state, filteredProducts: [...temp] };
  }

  if (action.type === MAKE_GRID_LAYOUT) {
    return { ...state, gridView: true };
  }

  if (action.type === MAKE_LIST_LAYOUT) {
    return { ...state, gridView: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    let temp = [...state.filteredProducts];

    if (action.payload === "lowest-price") {
      temp = temp.sort((a, b) => a.price - b.price);
      return { ...state, filteredProducts: temp };
    }
    if (action.payload === "highest-price") {
      temp = temp.sort((a, b) => b.price - a.price);
      return { ...state, filteredProducts: temp };
    }
    if (action.payload === "name-a-z") {
      temp = temp.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      return { ...state, filteredProducts: temp };
    }
    if (action.payload === "name-z-a") {
      temp = temp.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
      return { ...state, filteredProducts: temp };
    }
    return { ...state, filteredProducts: temp };
  }

  if (action.type === UPDATE_FILTER) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === CLEAR_FILTER_INPUT) {
    return { ...state, filters: { ...state.filters, value: "" } };
  }

  if (action.type === CLEAR_FILTER) {
    return {
      ...state,
      filters: {
        ...state.filters,
        value: "",
        company: "all",
        category: "all",
        colors: "all",
        shipping: false,
      },
    };
  }

  return state;
};

export default filterReducer;
