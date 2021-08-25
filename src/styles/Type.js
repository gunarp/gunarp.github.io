import {css, createGlobalStyle} from 'styled-components'

import * as Breakpoints from './Breakpoints'
import * as Colors from './Colors'

const sansSerifFallback = "'-apple-system', 'Roboto'"
export const fontFamily = `'jost', ${sansSerifFallback}`
export const monospace = "Menlo"

export const fontWeights = {
  regular: 400,
  bold: 600
}

export const body = css`
  font-size: 14px;
  @media(min-width: ${Breakpoints.mobile}) {
    font-size: 16px;
  }
`

export const body10 = css`
  font-size: 16px;
  line-height: 30px;
  font-weight: ${fontWeights.medium};
  @media(min-width: ${Breakpoints.mobile}) {
    font-size: 18px;
    line-height: 34px;
  }
`

export const header1 = css`
  font-size: 50px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};
  @media(max-width: ${Breakpoints.mobile}) {
    font-size: 28px;
    line-height: 122%;
  }
`

export const header2 = css`
  font-size: 1.6em;
  font-weight: ${fontWeights.bold};
  margin: 0;
`

export const header3 = css`
  font-size: 24px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};
  margin: 0;
  @media(max-width: ${Breakpoints.mobile}) {
    font-size: 20px;
    line-height: 138%;
  }
`

export const header4 = css`
  font-size: 24px;
  line-height: 152%;
  font-weight: ${fontWeights.medium};
  margin: 0;
  @media(max-width: ${Breakpoints.mobile}) {
    font-size: 20px;
    line-height: 138%;
  }
`

export const capsTitle = css`
  font-weight: ${fontWeights.medium};
  font-size: 14px;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
  @media(min-width: ${Breakpoints.mobile}) {
    font-size: 17px;
    letter-spacing: 0.18rem;
  }
`

export const GlobalType = createGlobalStyle`
  body {
    ${body};
    font-family: ${fontFamily};
  }
  h1 {
    ${header1};
    font-family: ${fontFamily};
  }
  h2 {
    ${header2};
  }
  h3 {
    ${header3};
  }
  h4 {
    ${header4};
  }
  p {
    margin: 0;
    font-family: ${fontFamily};
  }
  a {
    transition: all 300ms ease;
    color: ${Colors.text};
    cursor: pointer;
    text-decoration: none;
  }
`