import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Input,
    Label,
    Form,
    FormGroup,
    Row,
    Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { addChore } from '../actions/choreActions';


class choreModal extends Component {
    state = {
        modal: false,
        name: '',
        dollars: 0,
        last_completed_date: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        
        const newChore = {
            name: this.state.name,
            dollars: this.state.dollars,
            last_completed_date: Date.now()
        }
        console.log(newChore)
        this.props.addChore(newChore);
        this.toggle();
    }
    render () {
        return(
            <div>
                <Row>
                    <Col md={5}>
                    </Col>
                    <Col md={2}>
                        <Button
                            color="success"
                            
                            btn-block
                            style={{marginTop: '2rem'}}
                            onClick={this.toggle}
                        >Add Chore</Button>
                    </Col>
                    <Col md={5}>
                    </Col>

                </Row>

                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add a new chore to your list!</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="chore">Chore</Label>
                                <Input
                                  type="text"
                                  name="name"
                                  id="chore"
                                  placeholder="Enter the name of the chore"
                                  onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="chore">Dollars</Label>
                                <Input
                                  type="number"
                                  name="dollars"
                                  id="dollars"
                                  placeholder="Enter the dollar value of the chore"
                                  onChange={this.onChange}
                                />
                            </FormGroup>
                            <Button
                            color="dark"
                            style={{marginTop: '2rem'}}
                            block
                            >    
                            Add</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    chore: state.chore
})

export default connect(mapStateToProps, { addChore })(choreModal);