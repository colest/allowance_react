import { GET_TRANSACTIONS,  TRANSACTION_LOADING } from '../actions/types';

const initialState = {
    transactions: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TRANSACTIONS:  
            return {// this returns each item in the above state
                //...state,
                transactions: action.payload,
                loading: false 
            };
        case TRANSACTION_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
