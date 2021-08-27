import styled from 'styled-components'

import { Breakpoints, Colors } from '../../styles'

export const Blurb = styled.div`
  float: center;
  margin-top: 10vh;
  height: 30vh;
  position: relative;
  align-items: center;
  padding: 100px 0 160px 0;
  overflow: hidden;
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
  flex-direction: column;
  
  @media(min-width: ${Breakpoints.w980}) {
    flex-direction: row;
    margin: 0 0 106px 0;
  }
`
export const LeftCol = styled.div`
  width: 66%;
  flex-shrink: 0;
  float: left;
  margin: 30px;
  display: block;

  @media(min-width: ${Breakpoints.mobile}) {
    margin-top: 0;
    flex-shrink: 1;
  }
`
export const RightCol = styled.div`
  width: 33%;
  flex-shrink: 0;
  float: right;
  margin: 10px;
  display: flex;
  
  @media(min-width: ${Breakpoints.mobile}) {
    margin-top: 0;
    flex-shrink: 1;
  }
`

export const Headshot = styled.img`
  title: "Headshot";
  alt: "Peter Gunarso Smiling";
  border-radius: 50%;
  width: 300px;
  height: 300px;
`