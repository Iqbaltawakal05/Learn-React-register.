import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Menu from "./Pages/Menu"
import Navbar from "./Components/Navbar"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App