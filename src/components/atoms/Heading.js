import { media } from 'utils';
import styled from 'styled-components';

const Heading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;

  ${media.tablet`
    font-size: 40px;
  `}

  ${media.desktop`
    font-size: 52px;
  `}
`;

export default Heading;
