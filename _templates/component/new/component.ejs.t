# Template from: https://github.com/RyanWarner/ryan.warner.codes/tree/production/_templates/component/new
---
to: src/components/<%= name %>/<%= name %>.js
---
import React from 'react'

import * as S from './styles'

const <%= name %> = props =>
  <S.<%= name %>Component>
    <%= name %>
  </S.<%= name %>Component>

export default <%= name %>