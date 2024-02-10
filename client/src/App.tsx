import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import User from "./models/users";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";

function App() {

  const [selectedUser, setSelectedUser] = useState<User|null>(null);

  return (
    <BrowserRouter>
    <p className="font-title text-3xl">My Life Chart</p>
      <Routes>
        <Route 
          path="/register"
          element={
            <Register
            /> 
          }
        />
       <Route 
          path="/"
          element={
            <Login
              setSelectedUser={setSelectedUser}
            /> 
          }
        />
        <Route 
          path="/dashboard"
          element={
            <Dashboard
              selectedUser={selectedUser}
            /> 
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
