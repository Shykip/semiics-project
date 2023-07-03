import StudentDash from './pages/StudentDash'
import Login from './pages/Login'
import TeacherDash from './pages/TeacherDash'
import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route exact path="/student" element={<StudentDash />} /> 
        <Route exact path="/teacher" element={<TeacherDash />} /> 
        <Route exact path="/login" element={<Login />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
