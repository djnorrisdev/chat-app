import React, { Component } from 'react';
import MainChat from '../MainChat/MainChat';
import { MainWrapper } from './homeStyles';
import Sidebar from '../../shared/Sidebar/Sidebar';
import RightBar from '../../shared/RightBar/RightBar';
class Home extends Component {
	render() {
		return (
			<div>
        <MainWrapper>
					<Sidebar />
          <MainChat />
          <RightBar />
				</MainWrapper>
			</div>
		);
	}
}

export default Home;
