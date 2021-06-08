import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornedData from './Data.json';

// class name which is a  (react class component)
//  class Main is our react class component
// The react class Main component is extending or inheriting the React Component class
// it inherite the ability to render things in the webpage
class Main extends React.Component {
    render() {
        return (
            // initalizing the horned beast component
            // creating an instance
            <div>
                 {
                     hornedData.map((beast) => {
                         return (
                             <HornedBeasts 
                                title = {beast.title}
                                img = {beast.image_url}
                                description = {beast.description}
                             />
                         )
                     })
                 }
            </div>
            // new Horend (title, img, description) imaginate like this 
        )
    }
}

export default Main;