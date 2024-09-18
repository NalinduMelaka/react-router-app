import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./components/home";
import { useState, lazy } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const Users = lazy(() => import("./components/users"));
const UserProfile = lazy(() => import("./components/userProfile"));
const NotFound = lazy(() => import("./components/NotFount"));
const SearchUser = lazy(() => import("./components/searchUser"));
const AboutUs = lazy(() => import("./components/about"));
const Login = lazy(() => import("./components/login"));
const AuthProfile = lazy(() => import("./components/authProfile"));

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");

  const location = useLocation();

  return (
    <SwitchTransition component={null}>
      <CSSTransition
        className="fade"
        timeout={300}
        unmountOnExit
        key={location.pathname}
      >
        <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/search" element={<SearchUser />} />
          <Route path="/users/user/:id" element={<UserProfile />} />
          <Route
            path="/login"
            element={
              <Login setIsLogged={setIsLogged} setUsername={setUsername} />
            }
          />
          <Route
            path="/authProfile"
            element={
              isLogged ? (
                <AuthProfile username={username} />
              ) : (
                <Navigate replace to="/login" />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
