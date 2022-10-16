import React, { Component } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import StartPage from './StartPage';
import RadarChartComponent from './RadarChartPage';
import { MyResponsiveRadar } from './N_RadarChartPage';
import EditPage from './EditPage';
import RadarChart from './N2_RadarChart';
import Appss from './N3_RadarChart';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<StartPage />} />
            <Route path={`/radar/`} element={<RadarChartComponent />} />
            <Route path={`/radar2/`} element={<MyResponsiveRadar />} />
            <Route path={`/edit/`} element={<EditPage />} />
            <Route path={`/radar3/`} element={<RadarChart />}/>
            <Route path={`/radar4/`} element={<Appss />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

