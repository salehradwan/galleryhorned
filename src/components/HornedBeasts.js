import React from 'react';

class HornedBeasts extends React.Component {
    render() {
        console.log(this.props);
        return (
            <main>
                <div>
                    <h2> {this.props.title}</h2>
                    <img src={this.props.img} alt= {this.props.title} />
                    <p>
                    {this.props.description}
                    </p>
                </div>
            </main>
        )
    }
}

export default HornedBeasts;