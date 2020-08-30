import React from 'react';
import PropTypes from 'prop-types';

import './Content.scss';

function Content({ children }) {
  return(
    <content>
      {children}
    </content>
  );
}

Content.propTypes = {
  children: PropTypes.node
}

export default Content;