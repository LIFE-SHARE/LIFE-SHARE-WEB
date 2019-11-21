import * as React from "react";

import { Header, HouseList } from "./../../container";
import { dummy } from "./dummy";

interface Props {
  isLogin: boolean;
}

const GuestMain: React.FC<Props> = ({ isLogin }) => (
  <div>
    <Header isLogin={isLogin} />
    <HouseList houses={dummy} />
  </div>
);

export default GuestMain;
