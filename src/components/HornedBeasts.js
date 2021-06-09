import React from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import Main from './Main';
import FormInformation from './FormInformation';




class HornedBeasts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            userHorns: '',
            showHornedBeasts: false
        }
    };
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    updateHorns = (evt) => {
        this.setState({
            userHorns: evt.target.value,
            showHornedBeasts: !this.state.showHornedBeasts
        });
    }

    // submitForm = (evt) => {
    //     evt.preventDefault();
      
    //   // we will need to have a state that will render the component  once we submit the form
    //      this.setState({
    //       showHornedBeasts: !this.state.showHornedBeasts
    //   });
    //   }
    render() {
        console.log(this.props);
        return (
            <div>
                
                <Form>
                    <Form.Control onChange= {(evt) => this.updateHorns(evt)} as='select' aria-label="Default select example">
                        <option value="all">All</option>
                        <option value={this.props.horns === 1}>One</option>
                        <option value={this.props.horns === 2}>Two</option>
                        <option value={this.props.horns === 3}>Three</option>
                        <option value={this.props.horns === 100}>Okay?</option>
                    </Form.Control>
                </Form>

                {/* </Container> */}

                <Card style={{ width: '18rem', background: 'black', color: 'white' }}>
                    <Card.Img variant="top" onClick={() => {
                        this.increment();
                        this.props.handleModal(
                            // passing obj of Props
                            this.props
                        );
                    }}
                        src={this.props.img} alt={this.props.title} />
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
                <div>
                    {
                        this.state.showHornedBeasts &&
                      
                    }
                </div>
            </div>
        )
    }
}

export default HornedBeasts;