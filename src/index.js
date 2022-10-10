import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import ThemeProvider from './context/ThemeProvider';
import App from './containers/App';
import store from './store/store';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
