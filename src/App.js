import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./components/home";
import { useState, lazy, Suspense } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { appRoutes } from "./route";

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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes location={location}>
            {appRoutes.map((route) => {
              if (route.requireAuth && !isLogged) {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Navigate to={"/login"} />}
                  />
                );
              } else {
                return (
                  <Route
                    path={route.path}
                    key={route.path}
                    element={
                      <route.component
                        setIsLogged={setIsLogged}
                        setUsername={setUsername}
                        username={username}
                      />
                    }
                  />
                );
              }
            })}
          </Routes>
        </Suspense>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
