import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Person from 'assets/Rectangle 16.png';
import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  ${media.desktop`
    width: 35%;
    position: absolute;
    top: 0;
    right: 0;
  `};
`;

const StyledImage = styled.img`
  object-fit: contain;
  width: 100%;

  ${media.desktop`
    height: 100vh;
  `};
`;

const InnerWrapper1 = styled.div`
  width: 30%;
  margin: 56px 86px 66px;
`;

const InnerWrapper2 = styled.div`
  width: 50%;
  margin: 56px 86px 66px;
`;

const OuterWrapper = styled.div`
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  margin-bottom: 50px;
`;

const StyledName = styled.h3`
  font-size: 25px;
  font-weight: bold;
  line-height: 100%;
  margin-top: 30px;
`;

const About = () => (
  <>
    <ImageWrapper>
      <StyledImage src={Person} />
    </ImageWrapper>
    <InnerWrapper1>
      <Heading>about</Heading>
      <Paragraph>
        White artists work from real to the abstract, architects must work from the abstract to the
        real
      </Paragraph>
    </InnerWrapper1>
    <OuterWrapper>
      <InnerWrapper2>
        <Paragraph>
          Architectural design is primarily driven by the holistically creative manipulation of
          mass, space, volume, texture, light, shadow, materials, program, and Realistic elements
          such as cost, construction and technology, in order to achieve an end which is aesthetic,
          functional and often artistic. This distinguishes Architecture from engineering design,
          which is usually driven primarily by the creative application of mathematical and
          scientific principles.
        </Paragraph>
        <StyledName>Abigail Donutdough</StyledName>
      </InnerWrapper2>
    </OuterWrapper>
  </>
);

export default About;
