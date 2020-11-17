import { GET_BALANCE, BALANCE_LOADING, WITHDRAW } from '../actions/types';

const initialState = {
    balances: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BALANCE:  
            return {// this returns each item in the above state
                //...state,
                balances: action.payload,
                loading: false 
            };
        case WITHDRAW:
            return {
                balances: action.payload,
                loading: false
            }
        case BALANCE_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}

