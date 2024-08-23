import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';
  import './index.css';
import Playground from './Playground';
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Helllo Word</div>,
   
    },
  ]);
  
  const Router = () => {
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    );
  };

  export default Router;