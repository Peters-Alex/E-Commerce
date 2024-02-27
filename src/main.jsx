import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  store  from './Store.js';
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
     <App />
     <RouterProvider router={router} />
    </Provider> 
  </React.StrictMode>,
)
