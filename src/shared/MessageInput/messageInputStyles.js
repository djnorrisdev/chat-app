import styled from 'styled-components/macro';
import { rem } from 'polished';
import { Form } from 'semantic-ui-react';

export const MessageContainer = styled.div`
position: absolute;
bottom: ${rem('20px')};
left: 50%;
transform: translateX(-50%);
width: 60%;
&&& {
  button {
    letter-spacing: 1px;
    text-align: center;
  }
}
`

export const FormButton = styled(Form.Button)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`