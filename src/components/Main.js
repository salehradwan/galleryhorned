import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornedData from './Data.json';

// class name which is a  (react class component)
//  class Main is our react class component
// The react class Main component is extending or inheriting the React Component class
// it inherite the ability to render things in the webpage
class Main extends React.Component {
    render() {
        // const hornedBeasts = [{
        //     "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
        //     "title": "UniWhal",
        //     "description": "A unicorn and a narwhal nuzzling their horns",
        //     "keyword": "narwhal",
        //     "horns": 1
        // },

        // {
        //     "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
        //     "title": "Rhino Family",
        //     "description": "Mother (or father) rhino with two babies",
        //     "keyword": "rhino",
        //     "horns": 2
        // },

        // {
        //     "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
        //     "title": "Unicorn Head",
        //     "description": "Someone wearing a creepy unicorn head mask",
        //     "keyword": "unicorn",
        //     "horns": 1
        // }];
        return (
            // initalizing the horned beast component
            // creating an instance
            <div>
                {/* <HornedBeasts
                    title='UniWhal'
                    img='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
                    description='A unicorn and a narwhal nuzzling their horns'
                />
                <HornedBeasts
                    title='Rhino Family'
                    img='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'
                    description='Mother (or father) rhino with two babies'
                />
                <HornedBeasts
                    title='Unicorn Head'
                    img='https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'
                    description='Someone wearing a creepy unicorn head mask'
                /> */}
                {/* 
                // comment
                we are gogin to use our MAP function to loop through the array of hornedBeasts
                -* we are using the map function beacuse it has a return value
                ** forEach there is not a return value

                hornedBeasts.map((beast) =>{
                    return new HornedBeast(beast.title, beast.img, beast.description)
                })
                 */}

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