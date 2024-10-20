import React from 'react';
import ReactDOM from 'react-dom/client'; // Certifique-se de estar importando do 'react-dom/client'
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import ErrorPage from './pages/ErrorPage';

// Criando o root usando ReactDOM.createRoot
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Definindo as rotas usando createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

// Renderizando o RouterProvider no root
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
