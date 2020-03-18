import Gallery1 from 'assets/gallery1.png';
import Gallery2 from 'assets/gallery2.png';
import Gallery3 from 'assets/gallery3.png';
import Gallery4 from 'assets/gallery4.png';
import Gallery5 from 'assets/gallery5.png';
import Gallery6 from 'assets/gallery6.png';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  margin: 58px 86px 0;
  width: 40%;
`;
const GalleryWrapper = styled.div`
  color: black;
  display: flex;
  flex-wrap: wrap;
  margin: 40px 20px;

  ${media.desktop`
    margin: 86px;
  `};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 19px 6px 0;

  ${media.tablet`
    width: 48%;
  `};

  ${media.desktop`
    margin: 19px 22px 0 0;
    width: 30%;
  `};
`;

const Gallery = () => (
  <>
    <DescriptionWrapper>
      <Heading>gallery</Heading>
      <Paragraph>
        While artists work from the real to the abstract, architects must work from the abstract to
        the real.
      </Paragraph>
    </DescriptionWrapper>
    <GalleryWrapper>
      <Image src={Gallery1} />
      <Image src={Gallery2} />
      <Image src={Gallery3} />
      <Image src={Gallery4} />
      <Image src={Gallery5} />
      <Image src={Gallery6} />
    </GalleryWrapper>
  </>
);

export default Gallery;
