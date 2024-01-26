import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

// JSX Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Categories from "./pages/Categories";
import Cart from './pages/Cart';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/sign-in' element={<Signin/>}></Route>
        <Route path='/categories' element={<Categories/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
