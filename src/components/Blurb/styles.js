import styled from 'styled-components'

import { Breakpoints, Colors } from '../../styles'

export const Blurb = styled.div`
  float: center;
  margin-top: 10vh;
  height: 100%;
  position: relative;
  align-items: center;
  padding: 100px 0 160px 0;
  overflow: hidden;
  display: inline-flex;
  @media(min-width: ${Breakpoints.w980}) {
    margin-left: 10%;
    margin-right: 10%;
  }
`

export const H1 = styled.h1`
  color: ${Colors.text}
`

export const P = styled.p`
  color: ${Colors.text};
  font-size: 1.2em;
`

export const ContentWrap = styled.div`
  display: flex;
  margin: 0 0 70px 0;
  flex-direction: column-reverse;
  align-items: center;
  
  @media(min-width: ${Breakpoints.w980}) {
    flex-direction: row;
    margin: 0 0 106px 0;
  }
`
export const LeftCol = styled.div`
  width: 66%;
  flex-shrink: 1;
  float: left;
  display: block;

  @media(max-width: ${Breakpoints.mobile}) {
    width: auto;
    margin-top: 0;
    margin-left: 5%;
    margin-right: 5%;
    flex-shrink: 1;
  }
`
export const RightCol = styled.div`
  width: 33%;
  flex-shrink: 0;
  float: right;
  display: flex;
  
  @media(max-width: ${Breakpoints.mobile}) {
    width: 80vw;
    margin-top: 0;
    margin-left: 5%;
    margin-right: 5%;
    flex-shrink: 1;
  }
`