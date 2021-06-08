import React from 'react';

class HornedBeasts extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        console.log(this.props);
        return (
            <main>
                <div>
                    <h2> {this.props.title}</h2>
                    <img onClick={this.increment} src={this.props.img} alt= {this.props.title} />
                    <p>
                    {this.props.description}
                    </p>
                    <h3> 😋 {this.state.counter}</h3>
                </div>
            </main>
        )
    }
}

export default HornedBeasts;