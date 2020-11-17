import React, { Component } from 'react';
import BalanceDisplay from '../components/BalanceDisplay';
import GoalProgressBar from '../components/GoalProgressBar';


class GoalTracker extends Component {

    render() {
        return (
            <div>
                
                <BalanceDisplay/>
                <GoalProgressBar/>
            </div>
        )
         

    }
}

export default GoalTracker;