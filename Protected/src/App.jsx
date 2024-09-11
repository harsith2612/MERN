import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import ProtectedRoute from './AuthGaurd/ProtectedRoute'
import { AuthProvider } from './Context/AuthContext'

function App() {


  return (
    <>

      <div className="">
        {/* <Login></Login> */}

        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
