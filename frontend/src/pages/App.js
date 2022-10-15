import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./StartPage";
import EditPage from "./EditPage";
// import RadarChartComponent from "./RadarChartPage";
// import { MyResponsiveRadar } from "./N_RadarChartPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<StartPage />} />
            <Route path={`/edit`} element={<EditPage />} />
            {/* <Route path={`/radar/`} element={<RadarChartComponent />} />
            <Route path={`/radar_2/`} element={<MyResponsiveRadar />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
