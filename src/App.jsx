// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotificationsPage from "./pages/NotificationsPage";
import MySalaryPage from "./pages/MySalaryPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import NavBar from "./components/NavBar";
import BigContextProvider from "./contexts/BigContexts";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await axios.get(`http://localhost:8080/user/currentUser`, { withCredentials: true });
      return user;
    }

    // const token = document.cookie.substring(6);
    getCurrentUser()
      .then((user) => { console.log(user) })
      .catch((err) => { console.log(err) });

  }, [])

  return (
    <BigContextProvider>
      <div id="app">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/mySalary" element={<MySalaryPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </BigContextProvider>
  );
};

export default App;
