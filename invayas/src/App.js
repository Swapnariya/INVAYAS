import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

import Home from './screens/Home/Home';

function App() {
  return (
    <BrowserRouter>
   
        <Routes>
          <Route exact path="" element={<Home />} />
       
          <Route
            path="/*"
            element={
              <RequireAuth>
                <Routes>
            
                  <Route path="/Login" element={<Home />} />
            
                </Routes>
              </RequireAuth>
            }
          />
        </Routes>
     
    </BrowserRouter>
  )
}

const RequireAuth = ({ children }) => {
  let user = useSelector(state => state.user)
  let location = useLocation()

  if (!(user?.token)) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default App