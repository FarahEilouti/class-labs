import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './style.css';
let HornedB = data.map(element => <HornedBeast id = {element._id} title = {element.title} img = {element.image_url}/>)

class Main extends React.Component{
    render(){  
        return(

            <div id='allCards'>
               {HornedB}
            </div>
        )
    }
}

export default Main;