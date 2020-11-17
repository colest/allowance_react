
import { GET_CHORES, ADD_CHORE, COMPLETE_CHORE, CHORES_LOADING } from '../actions/types';

const initialState = {
    chores: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CHORES:
            return {// this returns each item in the above state
                ...state,
                chores: action.payload,
                loading: false 
            };
        case COMPLETE_CHORE:
            return {
                ...state,
               // chores: state.chores.filter(chore => chore._id !== action.payload)
            }
        case ADD_CHORE:
            return {
                ...state,
                chores: [action.payload, ...state.chores]
            };
        case CHORES_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}