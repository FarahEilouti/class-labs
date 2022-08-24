import { Button } from "bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";


class HornedBeast extends React.Component{
    render(){
        return (
        <div id="card">
            <Card>
                <Card.Img src = {this.props.img}/>

                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>

                <button variant = "info">Select</button>
            </Card>
        </div>
            
        )
    }
}
export default HornedBeast;