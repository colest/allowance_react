import React, { Component} from 'react';
import Withdraw from '../components/Withdraw';
import Deposit from  '../components/Deposit';
import { Container } from 'reactstrap';

class UpdateFunds extends Component {

    render() {
        return (
            <Container>
                <Withdraw/>
                <Deposit/>
            </Container>
        )
    }
}

export default UpdateFunds;