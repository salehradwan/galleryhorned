import React, { PureComponent } from 'react'
import Card from 'react-bootstrap/Card'
export default class FormInformation extends PureComponent {
    render() {
        return (
            <div>
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
                            ❤️ = {this.props.counter}
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
