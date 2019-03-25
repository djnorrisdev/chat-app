import React, { Component } from 'react';
import {
  Button,
  Form,
	Header,
	Segment,
	TransitionablePortal,
} from 'semantic-ui-react';
import { StyledForm } from './idPopupStyles';
import { rem } from 'polished';

export default class IdPopup extends Component {
	state = {
		open: true,
		userName: 'guest',
	};

	handleClose = () => this.setState({ open: false });

	handleChange = e => {
		this.setState({
			userName: e.target.value,
		});
  };
  
  handleSubmit = e => {
    e.preventDefault();
    const { userName} = this.state;
    this.props.handleUserName(userName);
    this.setState({
      open: false 
    })
  }

	render() {
		const { open } = this.state;

		return (
			<TransitionablePortal
				closeOnTriggerClick
				onClose={this.handleClose}
				open={open}
			>
				<Segment
					style={{ left: '50%', position: 'fixed', top: '50%', transform: 'translate(-15%, -50%)', zIndex: 1000, display:'flex', justifyContent: 'center' }}
				>
					<Header style={{textAlign:'center'}}>Enter a Username</Header>
					<StyledForm onSubmit={this.handleSubmit}>
						<Form.Input onChange={this.handleChange} />
						<Button style={{margin:`0 0 ${rem('16px')} ${rem('5px')}`}}>Submit</Button>
					</StyledForm>
				</Segment>
			</TransitionablePortal>
		);
	}
}
