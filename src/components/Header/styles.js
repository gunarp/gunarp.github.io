import styled from 'styled-components';
import { Link } from 'gatsby';

import { Breakpoints, Sizes, ZIndex, Colors, Type } from '../../styles';

export const Background = styled.div`
  width: 100%;
  height: ${Sizes.navHeightMobile};
  background-color: ${Colors.headerColor};
  opacity: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${ZIndex.z3};
  position: fixed;
  top: 0;

  @media(min-width: ${Breakpoints.mobile}) {
    height: ${Sizes.navHeight};
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  @media(min-width: ${Breakpoints.mobile}) {
    padding: 30px 0;
  }
`

export const MainNav = styled.div`
  display: flex;
  align-items: center;
`

export const Wordmark = styled(Link)`
  display: flex;
  font-size: 24px;
  font-weight: ${Type.fontWeights.bold};
  padding: 12px;
  margin-left: -20px;
  margin-bottom: 6px;
  
  @media(max-width: ${Breakpoints.mobile}) {
    margin-bottom: 8px;
  }
`