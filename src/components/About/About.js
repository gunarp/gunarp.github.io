import React from 'react';
import * as S from './styles';

import AboutContent from '../../content/about.mdx';

const About = () => {
  return (
    <S.AboutBox>
      <AboutContent />
    </S.AboutBox>
  )
}

export default About;