
import { GET_GOAL, CREATE_GOAL, GOALS_LOADING } from '../actions/types';

const initialState = {
    goals: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_GOAL:
            return {// this returns each item in the above state
                ...state,
                goals: action.payload
            };

        case CREATE_GOAL:
            return {
                ///...state,
                goals: [action.payload]
            };
        case GOALS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}