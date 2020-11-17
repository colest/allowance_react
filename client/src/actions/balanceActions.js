import { GET_BALANCE, BALANCE_LOADING, GET_TRANSACTIONS } from './types';
import axios from 'axios';

export const getBalance = () => dispatch => {
    dispatch(setBalanceLoading());
    axios
      .get('/api/balance')
      .then(res => 
        dispatch({
            type: GET_BALANCE,
            payload: res.data
        }));
}

export const depositFunds = (amount,name) => dispatch => {
  axios
  .get('/api/balance')
  .then(res => {
      let balID = res.data[0]._id;
      let dollars = res.data[0].dollars;
      dollars += amount;
      dispatch(setBalanceLoading());
      axios.put(`/api/balance/${balID}`,{dollars})
        .then(res => {
            axios.get('/api/balance')
             .then(res => dispatch({
                type: GET_BALANCE,
                payload: res.data
            }))
        })        
  })
  axios
    .post('/api/transactions', {name, dollars: amount})
    .then(res => {
      axios.get('/api/transactions')
      .then(res => dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data
    }))
  })

}

export const withdrawFunds = (amount,name) => dispatch => {
  
  axios
  .get('/api/balance')
  .then(res => {
      let balID = res.data[0]._id;
      let dollars = res.data[0].dollars;
      dollars -= amount;     
      dispatch(setBalanceLoading());
      axios.put(`/api/balance/${balID}`,{dollars})
        .then(res => {
            axios.get('/api/balance')
             .then(res => dispatch({
                type: GET_BALANCE,
                payload: res.data
            }))
        })      
  })
  let negativeAmount = amount * -1;
  axios
    .post('api/transactions', {name, dollars: negativeAmount})
    .then(res => {
      axios.get('/api/transactions')
      .then(res => dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data
    }))
})
}

export const setBalanceLoading = () => {
  return {
      type: BALANCE_LOADING
  }
}