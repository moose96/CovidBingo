import React from 'react';
import PropTypes from 'prop-types';

import CaseElement from '../CaseElement';
import './CasesList.scss';

function CasesList({ data }) {
  const labels = ['DZISIAJ', 'WCZORAJ'];
  let date;

  if (data[0]) {
    date = new Date(data[0].updated);
  }

  const updated = date && date.toLocaleString();

  return (
    <div className="cases-list">
      <div className="cases-list__data">
        {data.map((element, index) =>
          <CaseElement key={`case-element-${index}`} title={labels[index]} value={element.todayCases} />)}
          <a className="more" href="https://covid19.healthdata.org/poland">Więcej...</a>
      </div>
      <p className="updated">Zaktualizowano: {updated}
      </p>
    </div>
  )
}

CasesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    todayCases: PropTypes.number,
    updated: PropTypes.number
  })).isRequired,
}

export default CasesList;