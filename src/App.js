import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';

import { Header, Content, Footer} from './ui/layout';
import { BingoBoard, CasesList } from './game';
import { reset } from './game/containers/BingoBoardContainer/redux';

const API_URL = 'https://corona.lmao.ninja/v2/countries';

function App({ resetBoard }) {
  const [cases, setCases] = useState([]);

  const fetchData = async () => {
    const responses = [
      await fetch(`${API_URL}/poland?query&strict=true`),
      await fetch(`${API_URL}/poland?query&strict=true&yesterday=true`)
    ];

    const jsons = responses.map(async (response) => await response.json());
    const data = await Promise.all(jsons);

    return data;
  }

  useEffect(() => {
    fetchData()
      .then(data => {
        setCases(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header>
        <CasesList data={cases} />
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
