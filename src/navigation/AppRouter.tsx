import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateGuard } from './guards/PrivateGuard'
import { PrivateRouter } from './routers/PrivateRouter';
import { RoutesWithNotFound } from './routers/RoutesWithNotFound';
import MainLayout from './layouts/MainLayout';
import Home from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { ProductsCardContainer } from '../components/ProductsCardContainer/ProductsCardContainer';


export const AppRouter = () => {

  return (
    <BrowserRouter >
      <RoutesWithNotFound>

          <Route path="/" element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path="/" index element={<Home />} />
            <Route path="/products" index element={<ProductsCardContainer />} />
          </Route>

          <Route path="/login" element={<Login />} />

          <Route element={<PrivateGuard/>} >
            <Route path="/private/*" element={<PrivateRouter />} />
          </Route>


      </RoutesWithNotFound>
    </BrowserRouter>
  )
}

