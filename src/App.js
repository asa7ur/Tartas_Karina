import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, Products, SingleProductPage, ContactMe, Error } from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='productos' element={<Products />} />
        <Route path='productos/:id' element={<SingleProductPage />} />
        <Route path='contacto' element={<ContactMe />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
