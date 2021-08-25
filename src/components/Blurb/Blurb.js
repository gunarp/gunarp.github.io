import React from 'react';

import * as S from './styles';

const Blurb = () => {
  return (
    <S.Blurb>
      <S.ContentWrap>
        <S.LeftCol>
        <div><S.H1>Hi! I'm Peter, software engineer and technology lover.</S.H1></div>
        <div><S.P>yeehaw</S.P></div>
        </S.LeftCol>
        <S.RightCol>
          <S.Headshot src="../images/headshot.jpg"/>
        </S.RightCol>
      </S.ContentWrap>
    </S.Blurb>
  )
}

export default Blurb;
