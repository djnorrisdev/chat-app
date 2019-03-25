import styled from 'styled-components/macro';
import { rem } from 'polished';
import { Search } from 'semantic-ui-react';

export const Wrapper = styled.div`
width: ${rem('250px')};
height: calc(100vh - ${rem('55px')});
position: sticky;
top: 0;
overflow: hidden;
background: transparent;
display: flex;
flex-direction: column;
align-items: center;
color: #43425d;
// padding: ${rem('10px')};
border-right: 1.5px solid #eaeaea;
`;

export const SearchBox = styled(Search)`
  &&& input {
    width: 100%;
    border: none;
    border-radius: 0;
    background: #f4f4f4;
  }
`