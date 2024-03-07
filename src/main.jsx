import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Routers/App.jsx'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Quienes from './Routers/Quienes.jsx'
import AcercaDe from './Routers/AcercaDe.jsx'
import Error404 from './components/Error404.jsx'
import Catalogo from './Routers/Catalogo.jsx'
import CortinaMelbourne from './components/articulos/CortinaMelbourne.jsx'
import CortinaLimo from './components/articulos/CortinaLimo.jsx'
import CortinaAcademias from './components/articulos/CortinaAcademias.jsx'
import CortinaPantalla from './components/articulos/CortinaPantalla.jsx'
import CortinaDemencial from './components/articulos/CortinaDemencial.jsx'
import CortinaRaya from './components/articulos/CortinaRaya.jsx'
import CortinaAmsterdam from './components/articulos/CortinaAmsterdam.jsx'
import CortinaHogar from './components/articulos/CortinaHogar.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    errorElement: <Error404 />
  },
  {
    path:"/catalogo",
    element: <Catalogo />,
    errorElement: <Error404 />
  },
  {
    path:"/quienes",
    element: <Quienes />,
    errorElement: <Error404 />
  },
  {
    path:"/acerca",
    element: <AcercaDe />,
    errorElement: <Error404 />
  },
  {
    path:"/articulos/cortinaMelbourne",
    element: <CortinaMelbourne />,
    errorElement: <Error404 />
  },
  {
    path:"/articulos/cortinaLimo",
    element: <CortinaLimo />,
    errorElement: <Error404 />
  },
  {
    path:"/articulos/cortinaAcademias",
    element: <CortinaAcademias />,
    errorElement: <Error404 />
  },
  {
    path:"/articulos/cortinaPantallaBlanca",
    element: <CortinaPantalla />,
    errorElement: <Error404 />
  },
  {
    path:"/articulos/cortinaDemencial",
    element: <CortinaDemencial />,
    errorElement: <Error404 />
  },
  {
    path:"/articulos/cortinaRayas",
    element: <CortinaRaya />,
    errorElement: <Error404 />
  },
  {
    path:"/articulos/cortinaAmsterdam",
    element: <CortinaAmsterdam />,
    errorElement: <Error404 />
  },
  {
    path:"/articulos/cortinaHogar",
    element: <CortinaHogar />,
    errorElement: <Error404 />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
