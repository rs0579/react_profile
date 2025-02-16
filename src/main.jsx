import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import About from './pages/About'
import Contact from './pages/contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Error from './pages/Error'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // This will be the main layout
    errorElement: <Error />,
    children: [
      {
        index: true, // This makes the index route render the About component
        element: <About />
      },
      {
        path: 'about', // This is the /about route
        element: <About />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'resume',
        element: <Resume />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)