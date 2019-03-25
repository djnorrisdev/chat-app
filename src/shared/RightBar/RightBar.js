import React, { Component } from 'react';
import { Name, RightTitles, Wrapper } from './rightBarStyles';
import io from 'socket.io-client';

const socketURL = 'http://localhost:7000';
const socket = io(socketURL);

class RightBar extends Component {
  state = {
    names: []
  }
  componentDidMount () {
    this.updateNames();
  }

  updateNames = () => {
    socket.on('userId', id => {
      console.log(id);
      const data = JSON.parse(id)
      this.setState({
        names: [...this.state.names, data]
      })
    });
  }

  render() {
    const { names } = this.state;
    console.log(names)
    return (
      <Wrapper>
        <h3>Users</h3>
        <RightTitles>Online</RightTitles>
        <Name>{
          names !== [] ? names.map(name => name) : null
        }</Name>
        <RightTitles>Offline</RightTitles>
      </Wrapper>
    )
  }
}

export default RightBar;
