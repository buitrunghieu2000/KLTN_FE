import React, { useState } from "react";
import { Route, RouteProps, useHistory } from "react-router-dom";
import useAuth from "../store/auth";
import { LoadingLMS } from "./Loading";

interface IPrivateRoute extends RouteProps {
  roleRoute?: Array<number>;
}
export const PrivateRoute = (props: IPrivateRoute) => {
  // const { roleRoute } = props;
  const [, actionAuth] = useAuth();
  // console.log("asd", roleRoute);
  const history = useHistory();

  // const user = useSelector(selectCurrentUser);
  const [acceptRoute, setAcceptRoute] = useState(false);

  const fetchAuth = async () => {
    const res = await actionAuth.getUserAsync();
    // console.log("123", res);
    if (!res) {
      history.push("/login");
    }
    setAcceptRoute(true);
  };
  React.useEffect(() => {
    fetchAuth();
    //To know my current status, send Auth request
  }, []);

  // const isLoggedIn = localStorage.getItem('token')
  // if (!isLoggedIn) return <Redirect to='/' />
  if (acceptRoute) return <Route {...props} />;
  return <LoadingLMS loading={true} />;
};
