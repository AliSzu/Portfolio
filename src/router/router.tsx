import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Project from '../screens/Project/Project';


const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
  },
  {
    path: '/project/:id',
    element: <Project/>,
  }
]);

export default router;