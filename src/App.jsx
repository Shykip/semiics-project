import StudentDash from './pages/StudentDash'
import Login from './pages/Login'
import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route exact path="/" element={<StudentDash />} /> 
        <Route exact path="/login" element={<Login />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
