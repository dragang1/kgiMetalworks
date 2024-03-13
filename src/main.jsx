import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// links
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Gallery from './components/Gallery.jsx'
import HomePage from './components/HomePage.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },

      {
        path: 'contact',
        element: <Contact />,
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
