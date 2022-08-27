import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './data.json';
import './style.css';
// let HornedB 

class Main extends React.Component{
    render(){  
        return(
            
            <div id= 'allCards'>
               {this.props.beastData.map(element =>
                <HornedBeast
                id = {element._id} 
                title = {element.title} 
                img = {element.image_url} 
                description = {element.description} 
                myFunction = {this.props.myFunction}/>)
}         
            </div>
        )
    }
}

export default Main;