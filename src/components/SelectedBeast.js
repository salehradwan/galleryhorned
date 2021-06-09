import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export class SelectedBeast extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>{this.props.selectedProps.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Card style={{ width: '18rem', background: 'black', color: 'white' }}>
                            <Card.Img variant="top" src={this.props.selectedProps.img} alt={this.props.selectedProps.title} />
                            <Card.Body>
                                <Card.Title>{this.props.selectedProps.title}</Card.Title>
                                <Card.Text>
                                    {this.props.selectedProps.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SelectedBeast
