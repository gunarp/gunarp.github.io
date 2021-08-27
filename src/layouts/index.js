import React from 'react';
import { Header, Footer } from '../components';
import { GlobalStyle } from '../styles/Global';
import { GlobalType } from '../styles/Type';

import * as S from './style'

const Default = props => {
  return (
    <main>
      <title>{props.pageTitle}</title>
      <GlobalStyle />
      <GlobalType />
      <S.Wrap>
        <Header />
        {props.children}
        <Footer />
      </S.Wrap>
    </main>  
  )
}

const Layout = props => {
  const Component = Default;
  return (<Component {...props} />);
}

export default Layout;