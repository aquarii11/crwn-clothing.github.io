import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
export const rootReducer  = combineReducers({user:userReducer,cart:CartReducer})
export default rootReducer;