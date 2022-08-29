
import ROUTES from "./components/Routes"

import Header from "./components/header/Header";

import Graph2D from "./components/graph2D/Graph2D";
import Graph3D from "./components/graph3D/Graph3D";
import Calculator from "./components/calculator/Calculator";
import {Route, Routes, BrowserRouter} from "react-router-dom";

import './App.css';

window.requestAnimFrame = (() => {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function App() {
  return (

    <div className="App">
        <BrowserRouter>
      <Header
          ROUTES={ROUTES}
      ></Header>
            <div className="content">
    <Routes>
        <Route exact path={ROUTES.MAIN.path} element={<Calculator/>}/>
        <Route exact path={ROUTES.CALCULATOR.path} element={<Calculator/>}/>
        <Route exact path={ROUTES.GRAPH2D.path} element={<Graph2D/>}/>
            <Route exact path={ROUTES.GRAPH3D.path} element={<Graph3D/>}/>
    </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
        }


export default App;
