import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Col,
    Table
} from 'reactstrap';
import { connect } from 'react-redux';
import { getTransactions } from '../actions/transactionActions';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';


class TransactionModal extends Component {
    state = {
        modal: false,
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
        this.props.getTransactions();
    }
    componentDidMount() {
        this.props.getTransactions();
    }
    onClick = e => {
        this.toggle();
    }
    render () {
        const { transactions } = this.props.transaction;

        return(
            <div>
                        <Button
                            color="success"
                            className="text-nowrap"
                            style={{marginTop: '8px'}}
                            onClick={this.toggle}
                        >Recent Transactions</Button>

                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Recent Transactions</ModalHeader>
                    <ModalBody>
                        <Table striped>
                            <tbody>
                                {transactions.map(({_id, name, dollars, completed_date}) => (
                                    <tr>
                                        <td>{name}</td>
                                        <td><CurrencyFormat value={dollars} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td><Moment format="MM/DD/YYYY">{completed_date}</Moment></td>
                                    </tr>

                                ))}

                            </tbody>

                        </Table>

                      
                    </ModalBody>
                    <ModalFooter>
                                                
                    <Button
                            color="danger"
                            style={{marginTop: '2rem'}}
                            onClick={this.toggle}
                            block
                            >    
                            Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

TransactionModal.propTypes = {
    getTransactions: PropTypes.func.isRequired,
    transaction: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    transaction: state.transaction
})

export default connect(mapStateToProps, { getTransactions })(TransactionModal);