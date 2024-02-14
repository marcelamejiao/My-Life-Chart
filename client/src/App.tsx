import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import User from "./models/users";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import CreateActivyForm from "./components/CreateActivityForm/CreateActivityForm";
import Layout from "./pages/Layout/Layout";
import ActivitiesPage from "./pages/ActivitiesPage/ActivitiesPage";

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
      <Routes>
        <Route 
          path="/register"
          element={
              <Register />
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
            <Layout 
              selectedUser={selectedUser}>
              <Dashboard
                selectedUser={selectedUser}
              /> 
            </Layout>
          }
        />
        <Route
          path="/form"
          element={
            <Layout 
              selectedUser={selectedUser}>
              <CreateActivyForm 
                selectedUser={selectedUser}
              />
            </Layout>
          }
        />
        <Route
          path="/activities"
          element={
            <Layout 
              selectedUser={selectedUser}>
              <ActivitiesPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
