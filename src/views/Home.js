import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';
import React from 'react';
import Rectangle from 'assets/Rectangle 2.jpg';
import { media } from 'utils';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 100px;

  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
    margin: 40px 20px 0 0;
  `}

  ${media.desktop`
    margin: 0 0;
    height: calc(100vh - 71px);
  `};
`;

const ImageWrapper = styled.div`
  margin-bottom: 60px;
  width: 100%;

  ${media.tablet`
    width: 40%;

  `};

  ${media.desktop`
    position: absolute;
    margin-bottom: 0;
    width: 40%;
    text-align: right;
    height: 100vh;
    top: 0;
    right: 0;
  `}
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;

  ${media.tablet`
    height: 100%;
    width: auto;
  `};
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: bold;
  line-height: 100.1%;
  margin-bottom: 30px;

  ${media.tablet`
    font-size: 70px;
  `};

  ${media.desktop`
    margin-bottom: 50px;
    font-size: 102px;
  `};
`;

const InnerWrapper = styled.div`
  width: 37%;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;

  ${media.tablet`
    text-align: right;
    width: 25%;
  `}
  ${media.desktop`
    margin-right: 42%;
    margin-left: auto;
  `};
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  width: 100%;
  margin-top: 26px;
`;

const Home = () => (
  <Wrapper>
    <ImageWrapper>
      <StyledImage src={Rectangle} />
    </ImageWrapper>
    <InnerWrapper>
      <Title>Your new space</Title>
      <Paragraph>
        While artists work from real to the abstract, architects must work from the abstract to the
        real
      </Paragraph>
      <ButtonWrapper>
        <Button>estimate project</Button>
      </ButtonWrapper>
    </InnerWrapper>
  </Wrapper>
);

export default Home;
