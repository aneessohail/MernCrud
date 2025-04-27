import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./Form"
import Mainpage from "./Mainpage"
import Updateform from "./Updateform"
import Navbar from "./Navbar"


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Mainpage/>}/>
      <Route path="/create" element={<Form/>}/>
      <Route path="/update/:id" element={<Updateform/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
