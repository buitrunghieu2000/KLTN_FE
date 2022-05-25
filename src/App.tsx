import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./components/404";
import Navbar from "./components/Navbar";
import { PrivateRoute } from "./components/PrivateRoute";
import Sidebar from "./components/Sidebar";
import AcceptPost from "./pages/acceptPosts";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import PostList from "./pages/postsList";
import PersonalPage from "./pages/profile";
import UserList from "./pages/userList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="appContainer">
        <Sidebar />
        <div className="appLayoutContent">
          <Switch>
            <PrivateRoute path="/" component={Dashboard} exact />
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/userlist" component={UserList} exact />
            <PrivateRoute path="/postlist" component={PostList} exact />
            <PrivateRoute path="/acceptpost" component={AcceptPost} exact />
            <PrivateRoute path="/personal" component={PersonalPage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
