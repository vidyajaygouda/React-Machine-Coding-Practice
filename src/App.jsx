import { RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import { ThemeProvider } from './cotext/ThemeContext'
import { routesConfig } from './router/routesConfig'
import { Provider } from 'react-redux'
import appStore from './store/appStore'

function App() {


  return (
    <div>
      <Provider store={appStore}>
      <RouterProvider router={routesConfig}>
          <ThemeProvider>
            <Home/>
        </ThemeProvider>
      </RouterProvider>
      </Provider>
     
    {/* <Memes/> */}
    {/* <ShimmerCSS/> */}
    
    </div>

  )
}

export default App
