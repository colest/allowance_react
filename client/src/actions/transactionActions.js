import { GET_TRANSACTIONS, TRANSACTION_LOADING } from './types';
import axios from 'axios';


export const getTransactions = () => dispatch => {
    dispatch(setTransactionLoading());
    axios
      .get('api/transactions')
      .then(res => 
        dispatch({
            type: GET_TRANSACTIONS,
            payload: res.data
        }));
}


export const setTransactionLoading = () => {
    return {
        type: TRANSACTION_LOADING
    }
  }