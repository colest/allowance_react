import React, { Component} from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux'; // get state from redux
import { getChores, completeChore } from '../actions/choreActions';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

class ChoresList extends Component {
    
 
    componentDidMount() {
        this.props.getChores();
        
    }

    onCompleteClick = (id, name, dollars) => {
        
        this.props.completeChore(id, name, dollars);
       
    };

    render() {
        const { chores } = this.props.chore;
        
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="chores-list">
                        {chores.map(({_id, name, dollars,last_completed_date}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    
                                    {name} - ${dollars} - Last Completed: <Moment format="MM/DD/YYYY">{last_completed_date}</Moment>
                                    <Button
                                      className="completed-chore-button float-right"
                                      color="danger"
                                      size="sm"
                                      onClick={this.onCompleteClick.bind(this, _id, name, dollars)}
                                    >
                                        Complete
                                    </Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>

        );
    }
}

ChoresList.propTypes = {
    getChores: PropTypes.func.isRequired,
    chore: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    chore: state.chore
})

export default connect(mapStateToProps, { getChores, completeChore })(ChoresList);