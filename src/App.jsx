import AdminHome from './pages/AdminHome'
import EmployeesPage from './pages/EmployeesPage'
import JobPage from './pages/JobPage'
import AddEmployee from './pages/AddEmpolyee'
import AddJob from './pages/AddJob'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='AdminHome' element={<AdminHome/>} />
        <Route path='JobPage' element={<JobPage/>} />
        <Route path='Employees' element={<EmployeesPage/>} />
        <Route path='AddEmployee' element={<AddEmployee/>} />
        <Route path='AddJob' element={<AddJob/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
