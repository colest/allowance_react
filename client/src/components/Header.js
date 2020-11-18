import React, { Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import ChoreModal from '../components/ChoreModal';
import TransactionsModal from '../components/TransactionsModal';

class Header extends Component {

    render() {

        return (
            <div id="header">
                <h1 id="header-title">Max's Allowance Tracker</h1>
                <ChoreModal/>
                <TransactionsModal/>
            </div>
        )
    };

}

export default Header;