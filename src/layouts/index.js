import React from 'react';
import { GlobalStyle } from '../styles/Global';
import { GlobalType } from '../styles/Type';

const Default = props => {
  return (
    <main>
      <title>{props.pageTitle}</title>
      <GlobalStyle />
      <GlobalType />
      {props.children}
    </main>  
  )
}

const Layout = props => {
  const Component = Default;
  return (<Component {...props} />);
}

export default Layout;