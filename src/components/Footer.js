import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

class Footer extends React.Component {
    render () {
        const myName = 'Saleh Radwan';
        return (
            // <footer>
            //     <span>
            //        Auther: {myName}
            //     </span>
            // </footer>

            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Auther: {myName}</Navbar.Brand>
                    </Container>
                </Navbar>

            </>
        )
    }
}
export default Footer;