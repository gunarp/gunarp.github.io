import React from 'react';

import * as S from './styles';
import headshot from '../../images/headshot.jpg';

const Blurb = () => {
  return (
    <S.Blurb>
      <S.ContentWrap>
        <S.LeftCol>
        <div><S.H1>Hi! I'm Peter, software engineer and technology lover.</S.H1></div>
        <div><S.P>yeehaw</S.P></div>
        </S.LeftCol>
        <S.RightCol>
          <S.Headshot src={headshot}/>
        </S.RightCol>
      </S.ContentWrap>
    </S.Blurb>
  )
}

export default Blurb;
