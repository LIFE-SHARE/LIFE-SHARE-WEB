import * as React from "react";

import * as S from "./style";
import { Header as HeaderComponents } from "./../../components";

interface Props {
  isLogin: boolean;
}

const Header: React.FC<Props> = ({ isLogin }) => (
  <HeaderComponents isLogin={isLogin} />
);

export default Header;
