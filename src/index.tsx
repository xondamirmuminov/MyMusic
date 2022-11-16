import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import App from './views/App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './style';
import './styles/App.less';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
