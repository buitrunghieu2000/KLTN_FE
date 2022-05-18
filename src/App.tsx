import { Route, Switch } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./components/404";
import Navbar from "./components/Navbar";
import { PrivateRoute } from "./components/PrivateRoute";
import Sidebar from "./components/Sidebar";
import AcceptPost from "./pages/acceptPosts";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import PostsList from "./pages/postsList";
import PersonalPage from "./pages/profile";
import UserList from "./pages/userList";
import useAuth from "./store/auth";

function App() {
  const [stateAuth] = useAuth();
  return (
    <div className="App">
      {stateAuth.isLoggedIn === false ? (
        <Login />
      ) : (
        <>
          <Navbar />

          <div className="appContainer">
            <div className="appSidebar">
              <Sidebar />
            </div>
            <div className="appLayoutContent">
              <Switch>
                <PrivateRoute path="/" component={Dashboard} exact />
                <Route path="/login" component={Login} exact />
                <PrivateRoute path="/userlist" component={UserList} />
                <PrivateRoute path="/postslist" component={PostsList} />
                <PrivateRoute path="/acceptpost" component={AcceptPost} />
                <PrivateRoute path="/personal" component={PersonalPage} exact />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
