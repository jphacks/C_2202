import React, { Component } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
// import StartPage from './StartPage';
import EditPage from './EditPage';
import { RadarComponent } from './RadarChartPage';
// import { elementType } from 'prop-types';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<EditPage />} />
            <Route path={`/edit`} element={<EditPage />} />
            <Route path={`/radar/`} element={<RadarComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

