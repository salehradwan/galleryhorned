import React, { PureComponent } from 'react'
import Form from 'react-bootstrap/Form'
// import HornedBeasts from './HornedBeasts';


export default class HornesForm extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            userHorns: ''
        }
    };
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    updateHorns = (evt) => {
        console.log(evt.target.value)
        this.setState({
            userHorns: evt.target.value,
        });
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Control onChange={(evt) => this.updateHorns(evt)} as='select' aria-label="Default select example">
                        <option value='all'>All</option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                        <option value='100'>Okay?</option>
                    </Form.Control>
                </Form> 
                <div>
                    {/* <HornedBeasts 
                        userHorns = {this.state.userHorns}
                    /> */}
                </div>           
            </div>
        )
    }
}
