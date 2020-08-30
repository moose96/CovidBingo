import React from 'react';
import PropTypes from 'prop-types';

import CaseElement from '../CaseElement';

function CasesList({ today, otherData }) {
  return (
    <div className="cases-list">
      <CaseElement title="TODAY" value={today && today.NewConfirmed} />
    </div>
  )
}

CasesList.propTypes = {
  today: PropTypes.object.isRequired,
  otherData: PropTypes.array.isRequired
}

export default CasesList;