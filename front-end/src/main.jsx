import React from 'react'
import Home from './routes/Home';
import QuemSomos from "./routes/QuemSomos";
import ErrorPage from "./error-page";
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import TecEducacao from './routes/TecsEducacao';
import Empreendedorismo from './routes/Empreendedorismo';
import Editora from './routes/Editora';
import Consultoria from './routes/Consultoria';
import ProjetosEducacionais from './routes/ProjetosEducacionais';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quem-somos",
    element: <QuemSomos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/consultoria",
    element: <Consultoria />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/editora",
    element: <Editora />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/empreendedorismo",
    element: <Empreendedorismo />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projetos-educacionais",
    element: <ProjetosEducacionais />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tecnologias-em-educacao",
    element: <TecEducacao />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)