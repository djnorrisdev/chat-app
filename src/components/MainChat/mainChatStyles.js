import styled from 'styled-components/macro';
import { rem } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: calc(100% - ${rem('220px')});
  padding: 0 ${rem('30px')};
`

