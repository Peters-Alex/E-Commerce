import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import './index.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import  store  from './store.js';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
  path: "/",
  element: <div> Hello World!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </Provider> 
  </React.StrictMode>,
)
