const initialState = {
  cart: [],
  amount: 0,
};

// Reducer for Cart
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(function (item) {
          return (
            item.quantity !== action.payload.quantity ||
            item.size !== action.payload.size ||
            item.name !== action.payload.name
          );
        }),
      };
    case 'EMPTY_CART':
      return { cart: [], amount: 0 };
    case 'ADD_AMOUNT':
      return { ...state, amount: state.amount + action.payload };
    case 'SUB_AMOUNT':
      return { ...state, amount: state.amount - action.payload };

    default:
      return state;
  }
};

export default cartReducer;
