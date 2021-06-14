import React from 'react';
import Card from 'react-bootstrap/Card'



class HornedBeasts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    };
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    // updateHorns = (evt) => {
    //     console.log(evt.target.value)
    //     this.setState({
    //         userHorns: evt.target.value,
    //     });
    // }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.userHorns}</h1>
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
            </div>
        )
    }
}

export default HornedBeasts;