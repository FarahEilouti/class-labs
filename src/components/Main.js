import React from 'react';
import HornedBeast from './HornedBeast';
import image1 from "./pics/unicorn3.jpg";
import image2 from "./pics/unicorn1.jpg";

class Main extends React.Component{
    render(){
        return(
            <div>
               <HornedBeast title = 'unicorn 1' description = 'this is an image of a horned animal' img = {image1} />
               <HornedBeast title = 'unicorn 2' description = 'this is an other image of a horned animal' img = {image2} />
               
            </div>
        )
    }
}

export default Main;