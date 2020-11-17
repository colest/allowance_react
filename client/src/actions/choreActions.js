// will make back end requests
import { GET_CHORES, ADD_CHORE, CHORES_LOADING, GET_BALANCE, BALANCE_LOADING, GET_TRANSACTIONS } from './types';
import axios from 'axios';

export const getChores = () => dispatch => {
    dispatch(setChoresLoading());
    axios
      .get('/api/chores')
      .then(res => 
        dispatch({
            type: GET_CHORES,
            payload: res.data
        }))
}

export const completeChore = (id,name,dollars) => dispatch => {
    dispatch(setChoresLoading());

    axios
      .put(`/api/chores/${id}`,{last_completed_date: Date.now(), complete: true})
      .then(res => {
          axios.get('/api/chores')
          .then(res =>
              dispatch({
                  type:GET_CHORES,
                  payload:res.data
              }))
      })

    axios
        .post('/api/transactions', {name, dollars})
        .then(res => {
            axios.get('/api/transactions')
            .then(res => dispatch({
            type: GET_TRANSACTIONS,
            payload: res.data
        }))
    })  
    axios
      .get('/api/balance')
      .then(res => {
          let balID = res.data[0]._id;
          let balDollars = res.data[0].dollars;
          dollars += balDollars;
          dispatch(setBalanceLoading());
          axios.put(`/api/balance/${balID}`,{dollars})
            .then(res => {
                axios.get('/api/balance')
                .then(res => dispatch({
                    type: GET_BALANCE,
                    payload: res.data
                }))
            } )
            
      })
      
}

export const addChore = chore => dispatch => {
    console.log(chore);
    axios
      .post('/api/chores', chore)
      .then(res => dispatch({
          type: ADD_CHORE,
          payload: res.data
      }))
}

export const setChoresLoading = () => {
    return {
        type: CHORES_LOADING
    }
}

export const setBalanceLoading = () => {
    return {
        type: BALANCE_LOADING
    }
  }