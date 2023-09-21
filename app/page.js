'use client'
import { BrowserRouter as Router, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Routes} from 'react-router-dom';
import Inicio from './main/Inicio';
import Login from './login/Login';
import { useState } from 'react';

import Transferencias from './main/transferencias/Transferencias';
import Pagos from './main/pagos/Pagos';
import Cuentas from './main/cuentas/Cuentas';
import Layout from './main/Layout';

export default function App() {

  const [isLogged, setIsLogged] = useState(false);


  if (!isLogged) return <Login setIsLogged={setIsLogged} />
  
  const Root = () => {
    return (
      <>
        
        <div>
          <Outlet />
        </div>
      </>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index exact element={<Inicio/>} />
        <Route path="/Transferencias" element={<Transferencias />} />
        <Route path="/Pagos" element={<Pagos />} />
        <Route path="/Cuentas" element={<Cuentas />} />
      </Route>  
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}