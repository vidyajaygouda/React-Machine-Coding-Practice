
import { lazy } from 'react';

const Home = lazy(() => '../components/Home')
const Products = lazy(() => import("../components/Products/Products"));
const Dashboard = lazy(() => import('../components/Dashboard/Dashboard.jsx'));
const Orders =  lazy(() => import('../components/Orders/Order'));

export const routesConfig = [
   {
     path: '',
     element : <Home/>
   },
   {
    path: '/products',
    element: <Products/>
   },
   

]