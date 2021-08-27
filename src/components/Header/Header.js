import React from 'react';

import * as S from './styles';
import {Nav, SecondaryNav, Width} from '../';

const Header = () => {
  return (
    <S.Background>
      <Width>
        <S.Header>
          <S.MainNav>
            <S.Wordmark to="/">Peter Gunarso</S.Wordmark>
            <Nav/>
          </S.MainNav>
          <SecondaryNav />
        </S.Header>
      </Width>
    </S.Background>  
  )
}

export default Header;