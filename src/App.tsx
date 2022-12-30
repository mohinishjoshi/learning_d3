import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BarChartData from './components/bar-chart/BarChartData';
import Root from './components/root/Root';
import ErrorPage from './components/error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/barchart",
        element: <BarChartData />
      }
    ]
  }
]);

function App() {
  return (
    <ul>
      <RouterProvider router={router} />
    </ul>
  );
}

export default App;
