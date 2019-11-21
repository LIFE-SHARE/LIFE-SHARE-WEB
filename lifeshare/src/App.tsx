import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import { GlobalStyle } from "./../public/style/GlobalStyle";

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch></Switch>
  </BrowserRouter>
);

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
