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
      element: <Playground />,
   
    },
    {
      path:'/test',
      element: <div>tHIS IS A TEST </div>,
    },
    {
      path:'/treeFamily',
      element: <div>ICI on pourra voir l'arbre généalogique</div>
    }
  ]);
  
  const Router = () => {
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    );
  };

  export default Router;