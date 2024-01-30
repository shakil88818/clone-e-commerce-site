
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import Blog from './pages/Blog'
import CompareProducts from './pages/CopareProducts'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword'
import SingleBlog from './pages/SingleBlog'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ourstore" element={<OurStore />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="about" element={<About />} />
            <Route path='contact' element = {<Contact />} />
            <Route path="compare-products" element={<CompareProducts />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App