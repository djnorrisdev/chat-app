import styled from 'styled-components/macro';
import { Button, Form } from 'semantic-ui-react';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Title = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`

export const StyledForm = styled(Form)`
  width: 40%;
`;

export const Register = styled.p`
  &&& {
    margin: 1.5rem 0;
  }
`;

export const GoogleBtn = styled(Button)`
  &&& {
    margin: 1rem 0;
    width: 8rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #dd4b39;
    color: #f1f1f1;
    svg {
      font-size: 1.5rem;
      padding-right: 0.2rem;
    }
  }
`;
