import { css } from 'styled-components'

import { Breakpoints, Sizes } from '.'

export const outlineContainer = css`
  border-radius: 6px;
`

export const articleMaxWidth = css`
  width: 100vw;
  max-width: ${Sizes.maxArticleWidth};
  padding-left: 80px;
  padding-right: 80px;
  box-sizing: border-box;

  @media(max-width: ${Sizes.maxArticleWidth}) {
    max-width: 100vw;
  }

  @media(max-width: ${Breakpoints.mobile}) {
    padding: 0 6vw;
  }
`