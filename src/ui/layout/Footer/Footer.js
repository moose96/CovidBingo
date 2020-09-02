import React from 'react';

import './Footer.scss';
import '../../../styles/fontello.scss';

function Footer() {
  return(
    <footer>
      <p>Copyright Piotr Łosiak | 
        <a href="https://github.com/moose96"><span className="icon icon-github-circled" /></a>
        <a href="https://www.linkedin.com/in/piotrlosiak/"><span className="icon icon-linkedin" /></a>
      </p>
    </footer>
  );
}

export default Footer;