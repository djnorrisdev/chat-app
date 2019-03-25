import styled from 'styled-components/macro';
import { rem } from 'polished';

export const Wrapper = styled.div`
width: ${rem('220px')};
height: calc(100vh - ${rem('55px')});
position: sticky;
top: 0;
right: 0;
overflow: hidden;
background: transparent;
display: flex;
flex-direction: column;
color: #43425d;
padding: ${rem('8px')} ${rem('5px')} 0 ${rem('5px')};
border-left: 1.5px solid #eaeaea;
text-align: center;
  h3 {
    font-size: ${rem('18px')};
    color: rgba(0, 0, 0, 0.6);
  }
`;
export const RightTitles = styled.p`
    &&&& {font-size: ${rem('18px')};
    text-align: left;
    color: rgba(0, 0, 0, 0.6); } 
`
export const Name = styled.p`
    &&&& {font-size: ${rem('16px')};
    text-align: left;
    color: rgba(0, 0, 0, 0.6); } 
`