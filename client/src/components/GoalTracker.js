import React, { Component } from 'react';
import { Container } from 'reactstrap';
import BalanceDisplay from '../components/BalanceDisplay';
import GoalProgressBar from '../components/GoalProgressBar';


class GoalTracker extends Component {

    render() {
        return (
            <div>
                <Container>
                    <BalanceDisplay/>
                    <GoalProgressBar/>
                </Container>

            </div>
        )
         

    }
}

export default GoalTracker;