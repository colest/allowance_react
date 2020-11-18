import React, { Component} from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { getBalance } from '../actions/balanceActions';
import { getGoal } from '../actions/goalActions';
import PropTypes from 'prop-types';


class BalanceDisplay extends Component {
    //<h2>Your current goal is to buy: {goals[0].name}.  It will cost you ${goals[0].cost}.</h2>
    componentDidMount() {
        this.props.getBalance();
        this.props.getGoal();
        
    }

    render () {
       const { balances } = this.props.balance;
       const { goals } = this.props.goal;
       return (
            <div style={{display:"flex", justifyContent: "space-around", marginBottom: "1rem"}}>
                <div>
                    <Toast>
                        <ToastHeader>Balance</ToastHeader>
                        <ToastBody>
                            {balances.map(({_id, dollars}) => (
                                <h4 key={_id}>You currently have saved ${dollars}!</h4>
                            ))}
                        </ToastBody>
                    </Toast>
                </div>
                <div></div>
                <div >
                    <Toast>
                        <ToastHeader>Goal Progress</ToastHeader>
                        <ToastBody>
                            {goals.map(({_id,name, cost}) => (
                                <h4 key={_id}>You are saving for {name} and that will cost you ${cost}.</h4>
                        ))}
                        </ToastBody>
                    </Toast>   
                </div>
            </div>
        )
            
      
        }
}

BalanceDisplay.propTypes = {
    getBalance: PropTypes.func.isRequired,
    balance: PropTypes.object.isRequired,
    getGoal: PropTypes.func.isRequired,
    goal: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    balance: state.balance,
    goal: state.goal
});

export default connect(mapStateToProps, { getBalance, getGoal })(BalanceDisplay);