import React from "react";

class HornedBeast extends React.Component{
    render(){
        return (
        <div>
            <h2>{this.props.title}</h2>
            <img src = {this.props.img}/>
            <p>{this.props.description}</p>
        </div>
            
        )
    }
}
export default HornedBeast;