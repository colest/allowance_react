import React, { Component} from 'react';
import {
    Container,
    Button,
    Form,
    FormGroup,
    Input,
    Row,
    Col } from 'reactstrap';

import { connect } from 'react-redux'; // get state from redux
import { withdrawFunds } from '../actions/balanceActions';
import PropTypes from 'prop-types';

class Withdraw extends Component {

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        const amount = parseInt(this.state.amount);
        const name = this.state.name;

        this.props.withdrawFunds(amount,name);
    }

    render() {
        return (
            
                <Form onSubmit={this.onSubmit}>
                    <Row form>
                        <Col md={3}>
                            <FormGroup>
                                <Input type="number" name="amount" id='amount-withdraw' onChange={this.onChange} placeholder="Amount"/>
                            </FormGroup>
                        </Col>
                        <Col md={7}>
                            <FormGroup>
                                <Input type="text" name="name" id='name-withdraw' onChange={this.onChange} placeholder="Reason"/>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <Button color="primary" className="btn-block">Withdraw</Button>
                        </Col>
                    </Row>

                </Form>
            
        )
    }
}

Withdraw.propTypes = {
    withdrawFunds: PropTypes.func.isRequired,
    balance: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    balance: state.balance
});

export default connect(mapStateToProps, {withdrawFunds})(Withdraw);