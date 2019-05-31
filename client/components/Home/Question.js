import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Button, Badge} from 'react-bootstrap';

export default class Question extends Component{
	constructor() {
		super();
		this.state = {
			blank: '',
			error: false,
		}
	}

	

	

  handleSubmit = (e) => {
    e.preventDefault()
    const blank = this.state.blank;
    
  };

	render() {
		return (
			<div className='login'>
			  <Form className="login-form" horizontal onSubmit={this.handleSubmit}>
			    <FormGroup controlId="formHorizontalUsername">
            <Col sm={10} className='auth-text'>Log In</Col>
			      <Col sm={10}>
			        <FormControl 
                value={this.state.blank} 
                name="blank"
                placeholder="blank" 
                onChange={this.handleChange}
              />
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col sm={10}>
			        <Button style={{width:"100%"}} bsStyle='primary' type="submit">
			          Log In
			        </Button>
			      </Col>
			    </FormGroup>
			  </Form>
	  	</div>
  	);
	}
}

