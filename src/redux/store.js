import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer';

//creating store with reducer
const store = createStore(cartReducer);
export default store;
