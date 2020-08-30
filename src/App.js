import React, { useState, useEffect } from 'react';
import './App.scss';

import { Header, Content, Footer} from './ui/layout';
import { BingoBoard, CasesList } from './game';

function App() {
  const [todayCase, setTodayCase] = useState({});

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(data => {
        const poland = data.Countries.find(element => element.Country === 'Poland');

        setTodayCase(poland);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header>
        <CasesList today={todayCase} />
      </Header>
      <Content>
        <BingoBoard size={10} />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
