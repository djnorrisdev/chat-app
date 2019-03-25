import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';
import { CommentAvatar, CommentText } from './commentBoxStyles';
import uuid from 'uuid';

class CommentBox extends Component {

  displayMessage = () => this.props.messages.map((message, i) => (
    <Comment key={uuid.v4()}>
      <CommentAvatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>{message.username}</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <CommentText>{message.message}</CommentText>
      </Comment.Content>
    </Comment>
  ))

  render() {
    const { name, messages } = this.props;
    console.log(name, messages)
    return (
      <div>
        {this.displayMessage()}
      </div>
    )
  }
}

export default CommentBox;
