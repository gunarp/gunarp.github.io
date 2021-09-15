import React from 'react';
import { Header, Footer, Seo } from '../components';
import { GlobalStyle } from '../styles/Global';
import { GlobalType } from '../styles/Type';
import { MDXProvider } from '@mdx-js/react';
import components from '../components/mdxComponents';

import * as S from './style'

const Default = props => {
  return (
    <>
      <title>{props.pageTitle}</title>
      <Seo />
      <GlobalStyle />
      <GlobalType />
      <S.Wrap>
        <MDXProvider components={components}>
          <Header />
            {props.children}
          <Footer />
        </MDXProvider>
      </S.Wrap>
    </>  
  )
}

const Layout = props => {
  const Component = Default;
  return (<Component {...props} />);
}

export default Layout;