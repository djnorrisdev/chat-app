import React, { Component } from 'react'
import { Wrapper } from './mainChatStyles';
import CommentBox from '../../shared/CommentBox/CommentBox';
import { Comment } from 'semantic-ui-react';
import IdPopup from '../../shared/IdPopup/IdPopup';
import MessageInput from '../../shared/MessageInput/MessageInput';
import io from 'socket.io-client';


const socketURL = 'http://localhost:7000';

const socket = io(socketURL);

class MainChat extends Component {
  state = {
    messages: [],
    currentMsg: '',
    userName: 'guest'
  }

  componentDidMount () {
    this.updateMessages();
  }

  updateMessages = () => {
    socket.on('connection', () => console.log('connection'))
    socket.on('message', message => {
      const data = JSON.parse(message)
      this.setState({
        messages: [...this.state.messages, data]
      })
    });
  }

  setUserName = userName => {
    this.setState({
      userName
    })
  }

  sendMessage = message => {
    this.setState({
      currentMsg: message
    })
    const { userName } = this.state;
    const data = {username: userName, message: message};

    socket.emit('message', JSON.stringify(data))
  }

  render() {
    const { currentMsg, messages, userName } = this.state;
    // console.log('currentmsg: ', currentMsg);
    // console.log("state " + this.state.messages);
    return (
      <Wrapper>
        <MessageInput sendMessage={this.sendMessage}/>
        <IdPopup handleUserName={this.setUserName} />
        { currentMsg !== '' ?
          <Comment.Group>
            <CommentBox name={userName} messages={messages} />
          </Comment.Group> : null }
        
      </Wrapper>
    )
  }
}

export default MainChat;
