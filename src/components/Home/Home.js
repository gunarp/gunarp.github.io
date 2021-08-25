import React from 'react'
import * as S from './styles'

import {Blurb, ModelViewer} from '../'

const Home = () => {
  return (
    <S.Home>
      <ModelViewer />
      <Blurb/>
      {/* <Notes/> */}
    </S.Home>
  )
}

export default Home;