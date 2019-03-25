import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { NameBox, BlurbBox } from '../../components/SideList/sideListStyles';
import { rem } from 'polished';


class SideListItem extends Component {
	render() {
		const { comment, imgSrc, name } = this.props;
		return (
			<>
				<Grid.Row>
          <NameBox>
					<div>
						<Image src={imgSrc} avatar />
						<span style={{fontSize: `${rem('15px')}`}}>{name}</span>
					</div>
          <div style={{paddingBottom: `${rem('1px')}`}}>
            <span style={{fontSize: `${rem('15px')}`}}>date</span>
          </div>
          </NameBox>
          <BlurbBox>
          <p>{comment}</p>
          </BlurbBox>
				</Grid.Row>
			</>
		);
	}
}

export default SideListItem;
