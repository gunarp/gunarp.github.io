import React from 'react';

import * as S from './styles';
import { StaticImage } from 'gatsby-plugin-image'

import BlurbText from '../../content/blurb.mdx';

const Blurb = () => {
  return (
    <S.Blurb>
      <S.ContentWrap>
        <S.LeftCol>
          <BlurbText />
        </S.LeftCol>
        <S.RightCol>
          <StaticImage 
            src = "../../images/headshot.webp"
            alt = "Peter Gunarso smiling in front of the Ballard Locks"
            placeholder = "blurred"
            layout = "constrained"
            imgStyle = {{ borderRadius: "50%" }}
          />
        </S.RightCol>
      </S.ContentWrap>
    </S.Blurb>
  )
}

export default Blurb;
