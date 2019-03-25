import styled from 'styled-components/macro';
import { rem } from 'polished';

export const Wrapper = styled.div`
  position: initial;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${rem('5px')};
  font-size: ${rem('16px')};
`;

export const BlurbBox = styled.div`
  text-align: center;
  padding-bottom: ${rem('5px')};
  p {
    font-size: ${rem('14px')};
  }
`;