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
import { depositFunds } from '../actions/balanceActions';
import PropTypes from 'prop-types';
    
class Deposit extends Component {

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        const amount = parseInt(this.state.amount);
        const name = this.state.name;

        this.props.depositFunds(amount, name);
    }

    render() {
        return (
            
                <Form onSubmit={this.onSubmit}>
                    <Row form>
                        <Col md={3}>
                            <FormGroup>
                                <Input type="number" name="amount" id='amount-deposit' onChange={this.onChange} placeholder="Amount"/>
                            </FormGroup>
                        </Col>
                        <Col md={7}>
                            <FormGroup>
                                <Input type="text" name="name" id='name-deposit' onChange={this.onChange} placeholder="Reason"/>
                            </FormGroup>
                        </Col>
                        <Col md={2}>

                            <Button color="primary" className="btn-block">Deposit</Button>
                        </Col>
                    </Row>

                </Form>
            
        )
    }
}
Deposit.propTypes = {
    depositFunds: PropTypes.func.isRequired,
    balance: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    balance: state.balance
});

export default connect(mapStateToProps, {depositFunds})(Deposit);