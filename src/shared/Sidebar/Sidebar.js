import React, { Component } from 'react';
import { Wrapper, SearchBox } from './sidebarStyles';
import SideList from '../../components/SideList/SideList';

class Sidebar extends Component {
  render() {
    return (
      <Wrapper>
        <SearchBox />
        <SideList />
      </Wrapper>
    )
  }
}

export default Sidebar;
