import { combineReducers } from 'redux';
import choreReducer from './choreReducer';
import goalReducer from './goalReducer';
import balanceReducer from './balanceReducer';
import transactionReducer from './transactionReducer';


export default combineReducers({
    chore: choreReducer,
    goal: goalReducer,
    balance: balanceReducer,
    transaction: transactionReducer

})