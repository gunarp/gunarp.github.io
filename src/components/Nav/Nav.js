import React from 'react';

import * as S from './styles';
import navItems from '../../data/navItems';

const Nav = () => {
  return (
    <S.Nav>
      {Object.values(navItems).map(item => (
        <S.NavItem key={item.url}>
          <S.NavLink to={item.url}>{item.title}</S.NavLink>
        </S.NavItem>
      ))}
      <S.NavItem key={"Resume"}>
        <S.ResumeLink href="Resume/Gunarso_Resume.pdf">Resume</S.ResumeLink>
      </S.NavItem>
    </S.Nav>
  )
}

export default Nav;