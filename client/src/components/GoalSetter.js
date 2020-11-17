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
import { getGoal, createGoal } from '../actions/goalActions';
import PropTypes from 'prop-types';

class GoalSetter extends Component {
    
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = e => {
        e.preventDefault();
        
        const newGoal = {
            name: this.state.name,
            cost: this.state.cost
        }
        
        this.props.createGoal(newGoal);

    }

    render() {
        
        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup >
                                
                                <Input type="text" name="name" id="goal-name" onChange={this.onChange} placeholder="Enter a name for your goal!"/>
                            </FormGroup>

                        </Col>
                        <Col md={4}>
                            <FormGroup >
                                
                                <Input type="number" name="cost" id="goal-cost" onChange={this.onChange} placeholder="What does your goal cost?"/>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <Button color="primary" className="ml-3" >Set Goal</Button>
                        </Col>
                    
                    </Row>
                </Form>
            </Container>

        )
    }
}

GoalSetter.propTypes = {
    getGoal: PropTypes.func.isRequired,
    goal: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    goal: state.goal
})
export default connect(mapStateToProps,{ getGoal, createGoal })(GoalSetter);