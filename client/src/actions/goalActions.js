import { CREATE_GOAL, GET_GOAL, GOALS_LOADING } from './types';
import axios from 'axios';

export const getGoal = () => dispatch => {
    dispatch(setGoalsLoading());
    axios
      .get('/api/goals')
      .then(res => 
        dispatch({
            type: GET_GOAL,
            payload: res.data
        }))
}

export const createGoal = goal => dispatch => {
    axios
      .post('/api/goals', goal)
      .then(res => dispatch({
          type: CREATE_GOAL,
          payload: res.data
      }))
}

export const setGoalsLoading = () => {
  return {
      type: GOALS_LOADING
  }
}
