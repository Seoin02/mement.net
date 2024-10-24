import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from '@/routes'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
