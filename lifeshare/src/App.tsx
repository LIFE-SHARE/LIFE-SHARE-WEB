import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import { GlobalStyle } from "./../public/style/GlobalStyle";
import { AdminMain, GuestMain, Login, Post, Search, Upload } from "./pages";

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = React.useState(0);
  const [isLogin, setIsLogin] = React.useState(true);

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
        <Route exact path="/login" component={Login} />
        <Route exact path="/post/:id" component={Post} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/upload" component={Upload} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
