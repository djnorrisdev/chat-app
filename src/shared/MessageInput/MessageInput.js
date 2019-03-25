import React, { Component } from 'react'
import { Form } from 'semantic-ui-react';
import { FormButton, MessageContainer } from './messageInputStyles'

class MessageInput extends Component {
  state = {
    currentMsg: ''
  }
  setMessage = e => {
    this.setState({
      currentMsg: e.target.value
    })
  }

  sendMessage = () => {
    const { currentMsg } = this.state;
    this.props.sendMessage(currentMsg);
  }

  render() {
    return (
      <>
        <MessageContainer>
        <Form onSubmit={this.sendMessage}>
          <Form.TextArea
            placeholder='Enter Message'
            onChange={this.setMessage}
          />
          <FormButton>Submit</FormButton>
        </Form>
      </MessageContainer>
      </>
    )
  }
}

export default MessageInput;
