import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ToastProvider } from 'react-toast-notifications';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}

root.render(
  <BrowserRouter>
    <ToastProvider>
      <App />
    </ToastProvider>
  </BrowserRouter>
);
