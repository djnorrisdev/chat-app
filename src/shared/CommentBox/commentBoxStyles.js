import styled from 'styled-components/macro';
import { rem } from 'polished';
import { Comment } from 'semantic-ui-react';

export const CommentText = styled(Comment.Text)`
  min-width: ${rem('350px')};
  min-height: ${rem('80px')};
  background: lightblue;
  border-radius: 0 20px 20px 20px;
  padding: ${rem('10px')} ${rem('20px')};
`

export const CommentAvatar = styled(Comment.Avatar)`
  &&&& img {
    border-radius: 50%;
  }
`