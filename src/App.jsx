// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotificationsPage from "./pages/NotificationsPage";
import MySalaryPage from "./pages/MySalaryPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import NavBar from "./components/NavBar";
import WorthItBanner from "./components/WorthItBanner";
import { useBigContext } from "./contexts/BigContexts";
import { useEffect } from "react";
import axios from "axios";
import AdminPrivateRoute from './components/AdminPrivateRoute';
import PostBubble from "./components/PostBubble";
import SalaryCalculator from "./pages/SalaryCalculator";
import PostPage from "./pages/PostPage";

const App = () => {
  const { isLoggedIn, setLoggedUser, setIsLoggedIn, isAdmin, setIsAdmin } = useBigContext();

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await axios.get(`http://localhost:8080/user/currentUser`, { withCredentials: true });
      const { data } = user;
      if (data) {
        setIsLoggedIn(true);
        setLoggedUser(data);
        setIsAdmin(data.isAdmin);
      } else {
        setIsLoggedIn(false);
        setIsAdmin(false);
      }
    }

    getCurrentUser()
      .catch((err) => { console.log(err) });

  }, [])

  return (
    <div id="app">
      <WorthItBanner />
      <BrowserRouter>
        {isAdmin ? <PostBubble /> : ''}
        {isLoggedIn ? <NavBar /> : ''}
        <Routes>
          <Route path="/" element={isLoggedIn ? '' : <LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/calculator" element={<SalaryCalculator />} />
            <Route path="/mySalary" element={<MySalaryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/post/:postId" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;