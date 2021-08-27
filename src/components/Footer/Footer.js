import React from 'react';
import {Link} from 'gatsby';
import * as S from './styles';

const gatsby = "https://gatsbyjs.org";
const jost = "https://indestructibletype.com/Jost.html";
const rw = "https://ryan.warner.codes";

const Footer = props => {
  return (
    <S.Footer {...props}>
      <S.Credits>
        <p>Developed by Peter Gunarso, with lots of inspiration from <Link el='a' to={rw}>Ryan Warner</Link>.</p>
        <p>Built with <Link el='a' to={gatsby}>Gatsby</Link>. Type set in <Link el='a' to={jost}>Jost</Link>.</p>
      </S.Credits>
    </S.Footer>  
  )
}

export default Footer;