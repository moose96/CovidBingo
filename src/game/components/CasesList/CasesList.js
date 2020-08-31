import React from 'react';
import PropTypes from 'prop-types';

import CaseElement from '../CaseElement';
import './CasesList.scss';

function CasesList({ data }) {
  return (
    <div className="cases-list">
      <CaseElement title="TODAY" value={data[0] && data[0].cases} />
      <CaseElement title="YESTERDAY" value={data[1] && data[1].cases} />
    </div>
  )
}

CasesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    cases: PropTypes.number,
    date: PropTypes.instanceOf(Date)
  })).isRequired,
}

export default CasesList;