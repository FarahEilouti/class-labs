import React from 'react'
import {Button,Modal} from 'react-bootstrap';

class Select extends React.Component{
    render(){
        return(
            
            <Modal show ={this.props.showModel} onHide={this.props.closeCard}>
                <Modal.Header closeButton>
                <Modal.Title>{this.props.selectBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                <img src={this.props.selectBeast.image_url} alt={this.props.selectBeast.title} />   
                <p>{this.props.selectBeast.description}</p>  
                </Modal.Body>
                <Modal.Footer>
                <Button variant = "secondary" onClick ={this.props.closeCard}>
                Close
                </Button>
                </Modal.Footer>
            </Modal>
            
        )
    }
}
export default Select;