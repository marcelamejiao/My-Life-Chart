import { useState } from "react"
import CreateUserForm from "./components/CreateUserForm/CreateUserForm"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import User from "./models/users";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {

  const [selectedUser, setSelectedUser] = useState<User|null>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/register"
          element={
            <CreateUserForm 
            /> 
          }
        />
       <Route 
          path="/login"
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
