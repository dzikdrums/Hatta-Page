import { media } from 'utils';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 160.1%;

  ${media.tablet`
  font-size: 16px;

  `};

  ${media.desktop`
  font-size: 18px;

  `};
`;

export default Paragraph;
