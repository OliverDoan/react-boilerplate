import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AboutPage from './pages/About'
import Login from './pages/Auth/Login'
import App from './App'
import { routes } from './constants/routes'

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      { path: routes.login, element: <Login /> },
      { path: routes.about, element: <AboutPage /> }
    ]
  }
])
