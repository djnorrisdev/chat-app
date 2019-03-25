import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SideListItem from '../../shared/SideListItem/SideListItem';
import { Wrapper } from './sideListStyles';
import uuid from 'uuid';

class SideList extends Component {
	state = {
		users: [
			{
				fullName: 'PulzChat',
				src:
					'https://pbs.twimg.com/profile_images/1051157346796400646/t33XAm04.jpg',
				comment:
					'Click the "How to Use" button to learn how to start chatting.',
			},
			{
				fullName: 'Kendra Blane',
				src:
					'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
				comment: 'This is some sample text of a message waiting to be read.',
			},
			{
				fullName: 'Chaz Rune',
				src:
					'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=74daec1914d1d105202bca8a310a6a71',
				comment: 'This is some sample text of a message waiting to be read.',
			},
			{
				fullName: 'Denise Sampson',
				src:
					'https://images.unsplash.com/photo-1500080209535-717dd4ebaa6b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=acddea1fd5f8d1eafd1fc300f280176c',
				comment: 'This is some sample text of a message waiting to be read.',
			},
			{
				fullName: 'Loki Bright',
				src:
					'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?h=350&auto=compress&cs=tinysrgb',
				comment: 'This is some sample text of a message waiting to be read.',
			},
			{
				fullName: 'Love Grayson',
				src:
					'https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?h=350&auto=compress&cs=tinysrgb',
				comment: 'This is some sample text of a message waiting to be read.',
			},
			{
				fullName: 'Aldolfo Hess',
				src:
					'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=73a9df4b7bd1b330db1e903e08575ec1',
				comment: 'This is some sample text of a message waiting to be read.',
			},
			{
				fullName: 'Avalon Carey',
				src:
					'https://images.pexels.com/photos/227294/pexels-photo-227294.jpeg?h=350&auto=compress&cs=tinysrgb',
				comment: 'This is some sample text of a message waiting to be read.',
			},
			{
				fullName: 'Krish Kendall',
				src:
					'https://images.pexels.com/photos/576924/pexels-photo-576924.jpeg?h=350&auto=compress&cs=tinysrgb',
				comment: 'This is some sample text of a message waiting to be read.',
			},
			{
				fullName: 'Renee Lemon',
				src:
					'https://images.pexels.com/photos/308249/pexels-photo-308249.jpeg?h=350&auto=compress&cs=tinysrgb',
				comment: 'This is some sample text of a message waiting to be read.',
			},
			{
				fullName: 'Fred Kand',
				src:
					'https://pbs.twimg.com/profile_images/1031854842690641920/J1mZY1TY.jpg',
				comment: 'This is some sample text of a message waiting to be read.',
			},
			{
				fullName: 'Fred Kand',
				src:
					'https://pbs.twimg.com/profile_images/1031854842690641920/J1mZY1TY.jpg',
				comment: 'This is some sample text of a message waiting to be read.',
			},
			{
				fullName: 'Fred Kand',
				src:
					'https://pbs.twimg.com/profile_images/1031854842690641920/J1mZY1TY.jpg',
				comment: 'This is some sample text of a message waiting to be read.',
			},
		],
	};

	render() {
		const { users } = this.state;
		return (
			<Wrapper>
				<Grid celled="internally" style={{ padding: '0 0.7rem' }}>
					{users.map(user => (
						<SideListItem
							key={uuid.v4()}
							name={user.fullName}
							imgSrc={user.src}
							comment={user.comment}
						/>
					))}
				</Grid>
			</Wrapper>
		);
	}
}

export default SideList;
