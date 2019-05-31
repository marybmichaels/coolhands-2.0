import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import { Alert, Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Button, HelpBlock} from 'react-bootstrap';

export default class Question extends Component {
	state = {
		blank: ''
	};

  getValidationStateName() {
    if (/^[a-zA-Z,.'-]+$/.test(this.state.blank)) return 'success';
    else if (this.state.blank.length) return 'error';
  }

  handleChange = (e) => {
      this.setState({ [e.target.blank] : e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    jQuery.ajax({
      method: "POST",
      url: '/order',
      data: this.state,
      success: (result) => {
        this.props.approveLogin(result);
      },
      error: (err) => {
        alert(err.responseText);
      }
    });
  };

  render() {
    return (
      <Form horizontal method="post" onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationStateName()}
        >
          <Col smOffset={2} sm={10} className='auth-text'>Enter Order</Col>
          <Col smOffset={2} sm={10}>
            <FormControl
              type="text"
              value={this.state.blank}
              placeholder="Enter Order"
              name="blank"
              onChange={this.handleChange}
            />
            <FormControl.Feedback/>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

