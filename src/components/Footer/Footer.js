import React from 'react';
import * as S from './styles';

const rw = "https://ryan.warner.codes";

const Footer = props => {
  return (
    <S.Footer {...props}>
      <S.Credits>
        <p>Thanks to <u><a el='a' href={rw}>Ryan Warner</a></u> for making their webiste's source available.</p>
      </S.Credits>
    </S.Footer>  
  )
}

export default Footer;