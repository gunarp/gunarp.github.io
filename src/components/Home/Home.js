import React from 'react'
import * as S from './styles'

import {ModelViewer, Blurb} from '../'

const Home = () => {
  return (
    <S.Home>
      <ModelViewer />
      <Blurb/>
    </S.Home>
  )
}

export default Home;