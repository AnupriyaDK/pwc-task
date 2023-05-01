import './App.css';
import ProductLayout from './Components/layout/ProductLayout';
import Home from "./Components/login/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path={"/"} element={<Home/>} />
            <Route exact path={"/product"} element={<ProductLayout/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
