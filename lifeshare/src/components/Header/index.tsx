import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";
import { logo } from "./../../assets";
import SearchBar from "./../SearchBar";

interface Props {
  isLogin: boolean;
}

const Header: React.FC<Props> = ({ isLogin }) => (
  <S.HeaderContainer>
    <Link to="/">
      <S.HeaderLogo src={logo} />
    </Link>
    <S.HeaderItemsContainer>
      <SearchBar />
      {isLogin ? (
        <>
          <S.HeaderButton>
            <Link to="mypage" style={{ all: "unset" }}>
              마이페이지
            </Link>
          </S.HeaderButton>
          <S.HeaderButton>로그아웃</S.HeaderButton>
        </>
      ) : (
        <S.HeaderButton>
          <Link to="login" style={{ all: "unset" }}>
            로그인
          </Link>
        </S.HeaderButton>
      )}
    </S.HeaderItemsContainer>
  </S.HeaderContainer>
);

export default Header;
