import React, { Component} from 'react';
import { Progress } from 'reactstrap';
import { getBalance } from '../actions/balanceActions';
import { getGoal } from '../actions/goalActions';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class GoalProgressBar extends Component {

    componentDidMount() {
        this.props.getBalance();
        this.props.getGoal();

        
    }

    render () {
        const { balances } = this.props.balance;
        const { goals } = this.props.goal;
        let percentComplete = 0;
        let dollarsRemaining = 0;
        if(balances.length > 0 && goals.length > 0) {
            percentComplete = parseInt((balances[0].dollars / goals[0].cost * 100));
            dollarsRemaining = parseInt(goals[0].cost - balances[0].dollars);
        } 

        
        return (
            <div>
                
                <Progress id="prog" animated color="success" value={percentComplete}> {percentComplete}% | only ${dollarsRemaining} left!</Progress>
            </div>
            
        )
    }
}

GoalProgressBar.propTypes = {
    getBalance: PropTypes.func.isRequired,
    balance: PropTypes.object.isRequired,
    getGoal: PropTypes.func.isRequired,
    goal: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    balance: state.balance,
    goal: state.goal
});

export default connect(mapStateToProps, { getBalance, getGoal })(GoalProgressBar);