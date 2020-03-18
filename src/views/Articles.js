import Article1 from 'assets/article1.jpg';
import Article2 from 'assets/article2.jpg';
import Article3 from 'assets/article3.jpg';
import Article4 from 'assets/article4.jpg';
import Article5 from 'assets/article5.jpg';
import Article6 from 'assets/article6.jpg';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  margin: 58px 86px;
  width: 40%;
`;
const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 60px 20px;

  ${media.desktop`
    margin: 86px;
  `}
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 10px;

  ${media.tablet`
    width: 47%;
  `};

  ${media.desktop`
    margin: 19px 22px 0 0;
    width: 30%;
  `};
`;

const ImageDescWrapper = styled.div`
  position: absolute;
  width: 70%;
  bottom: 19px;
  left: 0;
  background-color: black;
  color: white;
  padding: 4px;
  padding-left: 25px;
`;

const ArticleTitle = styled.h4`
  font-size: 19px;
  font-weight: 500;
`;

const ArticleDate = styled.p`
  font-size: 12px;
`;

const Articles = () => (
  <>
    <DescriptionWrapper>
      <Heading>articles</Heading>
      <Paragraph>
        While artists work from the real to the abstract, architects must work from the abstract to
        the real.
      </Paragraph>
    </DescriptionWrapper>
    <GalleryWrapper>
      <ImageWrapper>
        <Image src={Article1} />
        <ImageDescWrapper>
          <ArticleTitle>Comfortable bedroom</ArticleTitle>
          <ArticleDate>17.02.2019</ArticleDate>
        </ImageDescWrapper>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={Article2} />
        <ImageDescWrapper>
          <ArticleTitle>Comfortable bedroom</ArticleTitle>
          <ArticleDate>17.02.2019</ArticleDate>
        </ImageDescWrapper>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={Article3} />
        <ImageDescWrapper>
          <ArticleTitle>Comfortable bedroom</ArticleTitle>
          <ArticleDate>17.02.2019</ArticleDate>
        </ImageDescWrapper>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={Article4} />
        <ImageDescWrapper>
          <ArticleTitle>Comfortable bedroom</ArticleTitle>
          <ArticleDate>17.02.2019</ArticleDate>
        </ImageDescWrapper>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={Article5} />
        <ImageDescWrapper>
          <ArticleTitle>Comfortable bedroom</ArticleTitle>
          <ArticleDate>17.02.2019</ArticleDate>
        </ImageDescWrapper>
      </ImageWrapper>
      <ImageWrapper>
        <Image src={Article6} />
        <ImageDescWrapper>
          <ArticleTitle>Comfortable bedroom</ArticleTitle>
          <ArticleDate>17.02.2019</ArticleDate>
        </ImageDescWrapper>
      </ImageWrapper>
    </GalleryWrapper>
  </>
);

export default Articles;
