import React from 'react';

import * as S from './styles';
import { secondaryNavItems } from '../../data/navItems';

const SecondaryNav = () => {
  return (
    <S.Nav>
      {Object.values(secondaryNavItems).map((item) => (
        <S.NavItem key={item.url}>
          <S.NavLink to={item.url}>{item.title}</S.NavLink>
        </S.NavItem>
      ))}
    </S.Nav>
  )
}

export default SecondaryNav;