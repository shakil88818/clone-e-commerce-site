
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import Blog from './pages/Blog'
import CompareProducts from './pages/CopareProducts'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ourstore" element={<OurStore />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path='contact' element = {<Contact />} />
            <Route path="compare-products" element={<CompareProducts />} />
            

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App