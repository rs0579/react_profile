import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
        {/* The above Outlet is a placeholder for the pages to come. The children in the main.ts are being brought to you by the Outlet. Without the Outlet, I would not be able to view the children.*/}
      </main>
      <Footer />
    </>
  )
}

export default App