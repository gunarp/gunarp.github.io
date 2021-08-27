import React from 'react';
import * as S from './styles';

const gatsby = "https://gatsbyjs.org";
const jost = "https://indestructibletype.com/Jost.html";
const rw = "https://ryan.warner.codes";

const Footer = props => {
  return (
    <S.Footer {...props}>
      <S.Credits>
        <p>Developed by Peter Gunarso, with lots of inspiration from <a el='a' href={rw}>Ryan Warner</a>.</p>
        <p>Built with <a el='a' href={gatsby}>Gatsby</a>. Type set in <a el='a' href={jost}>Jost</a>.</p>
      </S.Credits>
    </S.Footer>  
  )
}

export default Footer;