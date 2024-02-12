import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import User from "./models/users";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import CreateActivyForm from "./components/CreateActivityForm/CreateActivityForm";

function App() {

  // Load the user from session storage
  const userJson: string | null = sessionStorage.getItem("selectedUser");
  const loadedUser = userJson === null ? null : JSON.parse(userJson);  

  const updateSelectedUser = (user: User|null) => {
    sessionStorage.setItem("selectedUser", JSON.stringify(user));
    setSelectedUser(user);
  }

  const [selectedUser, setSelectedUser] = useState<User|null>(loadedUser);

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
              setSelectedUser={updateSelectedUser}
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
        <Route
          path="/form"
          element={
            <CreateActivyForm 
              selectedUser={selectedUser}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
