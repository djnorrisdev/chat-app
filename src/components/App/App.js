import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Topbar from '../../shared/Topbar/Topbar';
import Home from '../Home/Home';
import Login from '../Login/Login';
import firebase from 'firebase';
import io from 'socket.io-client';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const provider = new firebase.auth.GoogleAuthProvider();
const socketURL = 'http://localhost:7000';
const socket = io(socketURL);

//
// TODO: add Context API
//

class App extends Component {
  state = {
    loggedIn: false,
    user: ''
  }
  componentDidMount() {
    this.handleListen()

  }

  handleListen = () => {
    if (!firebase.apps.length) {
      try {
          firebase.initializeApp(config)
      } catch (err) {
          console.error('Firebase initialization error raised', err.stack)
      }
    } else {
      console.log('error@!')
    }
  }

  handleGoogleLogin = () => { 

    firebase.auth().signInWithPopup(provider).then(result => {
      const token = result.credential.accessToken;
      const user = result.user;
      const id = result.user.displayName
      // console.log(result, user)
      localStorage.setItem('user', token);
      socket.emit('userId', JSON.stringify(id))
      this.setState({
        loggedIn: true
      })
    }).catch(function(error) {
      console.log(error)
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
      // localStorage.removeItem(token);
    });
   
  }

  render() {
    const { loggedIn } = this.state;
    const display = loggedIn ? 'Logout' : 'Login'
    return (
      <Router>
      <div className="App">
				<Topbar name={display}/>
        <Route exact path='/' component={Home} />
        <Route path='/login' render={(props)=><Login {...props} handleLogin={this.handleGoogleLogin} loggedIn={loggedIn} />} />
      </div>
      </Router>
    );
  }
}

export default App;
