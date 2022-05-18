import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadInventory() {
  const brandResponse = await fetch('http://localhost:8100/api/brands/');
  let brandData;

  if (brandResponse.ok) {
    brandData = await brandResponse.json();
  } else {
    console.error(brandResponse);
  }

  root.render(
    <React.StrictMode>
      <App
        brands = {brandData.brands}
      />
    </React.StrictMode>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
