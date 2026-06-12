
import { lazy } from 'react';


import About from '../components/About';
import { createBrowserRouter } from 'react-router-dom';
import Memes from '../components/Shimmer/Memes';
import Accordion from '../components/Accordion/Accordion';
import Comments from '../components/Comments/Comments';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import ProductsItem from '../components/Pagination/ProductsItem';
// eslint-disable-next-line react-refresh/only-export-components
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
      },
      {
        path: '/imageSlider',
        element: <ImageSlider/>
      },
       {
        path: '/products',
        element: <ProductsItem/>
      }  
    ]
  },
 
])