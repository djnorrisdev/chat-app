import styled from 'styled-components/macro';
import { rem } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  height: ${rem('55px')};
  z-index: 100;
  background: transparent;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 1.5px solid #eaeaea;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  color: rgba(0,0,0,.6);
`;

export const Title = styled.h1`
  font-family: 'Lobster', cursive;
  padding-left: 0.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0;
`;

export const MenuBox = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
`;