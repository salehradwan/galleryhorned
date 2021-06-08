import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



class HornedBeasts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            show: false
        }
    };
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleModal = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <Card style={{ width: '18rem', background: 'black', color: 'white' }}>
                    <Card.Img variant="top" onClick={() => { this.increment(); this.handleModal(); }} src={this.props.img} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            ❤️ = {this.state.counter}
                        </Card.Text>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Modal show={this.state.show}>
                    <Modal.Header>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Card style={{ width: '18rem', background: 'black', color: 'white' }}>
                            <Card.Img variant="top" onClick={() => { this.increment(); this.handleModal(); }} src={this.props.img} alt={this.props.title} />
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text>
                                    ❤️ = {this.state.counter}
                                </Card.Text>
                                <Card.Text>
                                    {this.props.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default HornedBeasts;