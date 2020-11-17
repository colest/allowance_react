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
            <div>
                <h1 id="header-title">Max's Allowance Tracker</h1>
            </div>
        )
        // return (
        //     <div>
        //         <Navbar color="success" dark  expand="sm" className="mb-5">
        //             <Container>
        //                 <NavbarBrand href="/">Allowance Tracker</NavbarBrand>
        //                 <NavbarToggler onClick={this.toggle}/>
        //                 <Collapse isOpen={this.state.isOpen} navbar>
        //                     <Nav className="ml-auto" navbar>
        //                         <NavItem>
        //                             <NavLink href="/">Your Link Here</NavLink>
        //                         </NavItem>
        //                     </Nav>
        //                 </Collapse>
        //             </Container>

        //         </Navbar>
        //     </div>
        // );

    };

}

export default Header;