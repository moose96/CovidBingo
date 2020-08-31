import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';

import { Header, Content, Footer} from './ui/layout';
import { BingoBoard, CasesList } from './game';
import { reset } from './game/containers/BingoBoardContainer/redux';

function App({ resetBoard }) {
  const [todayCase, setTodayCase] = useState({});
  const [otherCases, setOtherCases] = useState([]);

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(data => {
        const poland = data.Countries.find(element => element.Country === 'Poland');

        setTodayCase({
          date: new Date(poland.Date),
          cases: poland.NewConfirmed
        });
      })
      .catch(err => console.log(err));
    fetch('https://api.covid19api.com/country/poland/status/confirmed')
      .then(response => response.json())
      .then(data => {
        const cases = data.reverse().map((element, index) => {
          let nextCases = 0;

          if (data[index + 1]) {
            nextCases = data[index + 1].Cases;
          }

          return {
            date: new Date(element.Date),
            cases: element.Cases - nextCases
          }
        });

        // const dailyCases = cases.map()

        setOtherCases(cases);
      })
  }, []);

  return (
    <div className="App">
      <Header>
        <CasesList data={[todayCase, ...otherCases]} />
      </Header>
      <Content>
        <div className="toolbar">
          <p onClick={() => resetBoard()}>Wyczyść</p>
        </div>
        <BingoBoard size={10} />
      </Content>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  resetBoard: () => dispatch(reset())
})

export default connect(null, mapDispatchToProps)(App);
