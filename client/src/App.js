import React, { Component } from 'react';
import Header from './components/Header';
import ChoresList from './components/ChoresList';
import ChoreModal from './components/ChoreModal';
import GoalSetter from './components/GoalSetter';
import GoalTracker from './components/GoalTracker';
import UpdateFunds from './components/UpdateFunds';
import TransactionsModal from './components/TransactionsModal';
import { Container, Row, Col,FormGroup } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header/>
          <Container>
            <ChoresList/>
          </Container>
          <div>
              <Row>
                <Col md={4}></Col>
                <Col md={2}><ChoreModal/></Col>
                <Col md={2}><TransactionsModal/></Col>
                <Col md={4}></Col>
              </Row>
          </div>  
          <Container style={{marginTop: '2rem'}}>            
            <UpdateFunds/>           
            <GoalSetter/>
            <GoalTracker/>
          </Container> 
        </div>  
      </Provider>
    );
  }

}

export default App;
