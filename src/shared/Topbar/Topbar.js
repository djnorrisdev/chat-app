import React, { Component } from 'react';
import { Title, Wrapper, MenuBox, TitleWrapper } from './topbarStyles';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import { FiActivity } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import firebase from 'firebase';


 class Topbar extends Component {
  state = {
    loggedIn: false,
    user: null
  }

  componentDidMount() {
    const login = localStorage.getItem('user')
    this.setState({
      user: login
    })
  }
  //Fix this
  // componentDidUpdate(){
  //   const { loggedIn, user } = this.state;
  //   const login = localStorage.getItem('user')
  //   this.setState({
  //     user: login,
  //     loggedIn: !loggedIn
  //   })
  // }
  handleRender = () => {
    const { user } = this.state;
    if (user !== null) {
      return (
        <Menu.Item>
          <Button style={{background:'transparent', fontWeight: 400}}></Button>
        </Menu.Item>
      )
    } else {
      return (
        <Menu.Item>
          <Link to='/login'>
            <Button style={{background:'transparent', fontWeight: 400}}>Login</Button>
          </Link>
        </Menu.Item>
      )
    }
  }

  render() {
    const { loggedIn, user } = this.state;
    const display = loggedIn ? 'Logout' : 'Login'
    return (
      <Wrapper>
        <Link to='/'>
          <TitleWrapper>
            <FiActivity style={{fontSize:'20px'}} />
            <Title>PulzChat</Title>
          </TitleWrapper>
        </Link>
        <MenuBox style={{display:'flex', justifyContent: 'space-between'}}>
          <Menu.Item>
            <Link to='/how-to-use'>
              <Button style={{background:'transparent', fontWeight: 400}}>How to Use</Button>
            </Link>
          </Menu.Item>
          {/* {this.handleRender()} */}
          <Menu.Item>
            <Link to='/login'>
              <Button style={{background:'transparent', fontWeight: 400}}>{this.props.name}</Button>
            </Link>
          </Menu.Item>
          <Dropdown item text='Options' style={{padding:'0 0.5rem 0 1.1rem', color:'rgba(0,0,0,.6)'}}>
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </MenuBox>
      </Wrapper>
    )
  }
}
export default Topbar;
