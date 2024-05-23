import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, ScrollToTop } from './components'
import { Home, Products, SingleProductPage, ContactForm, Error } from './pages'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='productos' element={<Products />} />
        <Route path='productos/:id' element={<SingleProductPage />} />
        <Route path='contacto' element={<ContactForm />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
