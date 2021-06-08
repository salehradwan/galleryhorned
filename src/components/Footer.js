import React from 'react';

class Footer extends React.Component {
    render () {
        const myName = 'Saleh Radwan';
        return (
            <footer>
                <span>
                   Auther: {myName}
                </span>
            </footer>
        )
    }
}

export default Footer;