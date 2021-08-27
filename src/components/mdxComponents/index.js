import React from 'react'
import slugify from 'slugify'
import { useLocation } from '@reach/router'

import * as S from './styles'

const heading = Tag => props => {
  const El = S[Tag]
  const slug = slugify(props.children.toString()).toLowerCase()
  const location = useLocation()

  return (
    <El {...props} id={slug}>
      <S.StyledLink to={`${location.pathname}#${slug}`}>
        {props.children}
      </S.StyledLink>
    </El>
  )
}

const components = {
  p: S.P,
  img: S.Img,
  h1: S.H1,
  h2: heading('H2'),
  h3: heading('H3'),
  a: props => <S.A {...props} />,
  li: props => <S.Li {...props} />,
  ul: props => <S.Ul {...props} />,
  ol: props => <S.Ol {...props} />,
  hr: S.Hr,
  pre: S.Pre,
  summary: S.Summary
}

export default components
