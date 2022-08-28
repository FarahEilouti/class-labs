import React from 'react'
import Form from 'react-bootstrap/Form'

class Hornes extends React.Component{

    render(){
        return (
        <Form onChange = {this.props.selectNumber}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">Choose number of horns:</Form.Label> 
                <Form.Select id="disabledSelect">
                    <option value= "default"> All beasts</option>
                    <option value= {1}>1-horned beasts</option>
                    <option value= {2}>2-horned beasts</option>
                    <option value= {3}>3-horned beasts</option>
                </Form.Select>
            </Form.Group>
        </Form>
        )

    }

}
export default Hornes;