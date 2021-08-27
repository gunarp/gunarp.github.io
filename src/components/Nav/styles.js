import styled from 'styled-components'

import { Link } from 'gatsby';
import { Breakpoints, Colors, Type, Sizes } from '../../styles';

export const Nav = styled.nav`
  position: relative;
  display: flex;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: ${Sizes.navHeightMobile};
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: background 300ms ease;
  }

  @media(min-width: ${Breakpoints.mobile}) {
    height: ${Sizes.navHeight};
    margin-left: 10px;
  }
`

export const NavLink = styled(Link)`
  padding: 10px;
  color: ${Colors.text};
  font-size: 17px;
  font-weight: ${Type.fontWeights.medium};
  text-decoration: none;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media(max-width: ${Breakpoints.mobile}) {
    padding: 5px;
    font-size: 14px;
    margin-left: 8px;
  }
`