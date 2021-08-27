import React from 'react'

import * as S from './styles'

const Width = ({ children, ...rest }) =>
  <S.Width {...rest}>
    {children}
  </S.Width>

export default Width;