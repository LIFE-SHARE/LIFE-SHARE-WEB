import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import { GlobalStyle } from "./../public/style/GlobalStyle";
import {
  AdminMain,
  GuestMain,
  Login,
  Post,
  Search,
  Upload,
  MyPage
} from "./pages";

Post.defaultProps = {
  isLogin: false
}
const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = React.useState(0);
  const [isLogin, setIsLogin] = React.useState(false);

  const handleLoginStatus = (status: boolean) => {
    setIsLogin(status);
  };

  const handleAdminStatus = (status: number) => {
    setIsAdmin(status);
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route
          exact
          path="/"
          component={
            isAdmin === 1 ? AdminMain : () => <GuestMain isLogin={isLogin} />
          }
        />
        <Route
          exact
          path="/login"
          component={() => (
            <Login
              isLogin={isLogin}
              handleLoginStatus={handleLoginStatus}
              handleAdminStatus={handleAdminStatus}
            />
          )}
        />
        <Route
          exact
          path="/post/:id"
          component={() => <Post isLogin={isLogin} />}
        />
        <Route exact path="/search" component={Search} />
        <Route exact path="/upload" component={Upload} />
        <Route
          exact
          path="/mypage"
          component={() => <MyPage isLogin={isLogin} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
