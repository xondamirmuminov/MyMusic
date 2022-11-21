import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import App from './views/App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './style';
import './styles/App.less';
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
);
