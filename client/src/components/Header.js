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

class Header extends Component {

    render() {

        return (
            <div style={{marginBottom: "2rem"}}>
                <h1 id="header-title">Max's Allowance Tracker</h1>
            </div>
        )
    };

}

export default Header;