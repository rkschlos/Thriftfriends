import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import BrandList from './BrandList';

// import logo from './logo.svg';
import './App.css';

function App(props) {
  if (props.brands === undefined) {
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="brands">
            <Route index element={<BrandList brands={props.brands} />} />
            </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
