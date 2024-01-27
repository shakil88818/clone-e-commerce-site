
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ourstore" element={<OurStore />} />
            <Route path="about" element={<About />} />
            <Route path='contact' element = {<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App