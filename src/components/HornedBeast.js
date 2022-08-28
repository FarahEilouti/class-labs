import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import data from "./data.json"

class HornedBeast extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            likes : 0
        }
    }

    incrementLikes = () => {
        this.setState({
            likes : this.state.likes + 1
        })
    }

    render(){
        return (
        <div id="card">
            <Card>
                <Card.Img src = {this.props.img} onClick = {this.incrementLikes}  />

                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>Likes : {this.state.likes}❤️</Card.Text>
                    <Card.Text>horns: {this.props.horns}</Card.Text>
                </Card.Body>

                <Button variant = "info" onClick = {()=>{this.props.myFunction(this.props.title)}} >press on picture</Button>
                
            </Card>
        </div>
            
        )
    }
}
export default HornedBeast;