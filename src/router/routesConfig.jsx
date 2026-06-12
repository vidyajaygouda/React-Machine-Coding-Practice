
import { lazy } from 'react';

const Products = lazy(() => import("../components/Products/Products"));
import About from '../components/About';
import { createBrowserRouter } from 'react-router-dom';
import Memes from '../components/Shimmer/Memes';
import Accordion from '../components/Accordion/Accordion';
import Comments from '../components/Comments/Comments';
const Home = lazy(() => import("../components/Home"))

export const routesConfig =  createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/memes',
        element: <Memes/>
      },
      {
        path: '/accordion',
        element: <Accordion/>
      },
      {
        path: '/comments',
        element: <Comments/>
      }  
    ]
  },
 
])