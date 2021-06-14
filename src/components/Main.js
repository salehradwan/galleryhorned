import React from 'react';
import Form from 'react-bootstrap/Form'
import HornedBeasts from './HornedBeasts';
import hornedData from './Data.json';

// class name which is a  (react class component)
//  class Main is our react class component
// The react class Main component is extending or inheriting the React Component class
// it inherite the ability to render things in the webpage
class Main extends React.Component {
    filter = (evt) => {
        const numHorns = Number(evt.target.value);
        let gallery = hornedData;
        if (numHorns) {
            gallery = hornedData.filter((value) => value.horns === numHorns);
        }
        this.props.updateAllData(gallery);
    }
    render() {
        return (
            // initalizing the horned beast component
            // creating an instance
            <div>
                <Form>
                    <Form.Control onChange={this.filter} as='select' aria-label="Default select example">
                        <option value=''>All</option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                        <option value='100'>Okay?</option>
                    </Form.Control>
                </Form>
                {
                    this.props.allData.map((beast, idx) =>
                    (
                        <HornedBeasts
                            key={idx}
                            index={idx}
                            title={beast.title}
                            img={beast.image_url}
                            description={beast.description}
                            displayAsModal={this.props.displayAsModal}
                            handleModal={this.props.handleModal}
                        />
                    )
                    )
                }

            </div>
            // new Horend (title, img, description) imaginate like this 
        )
    }
}

export default Main;