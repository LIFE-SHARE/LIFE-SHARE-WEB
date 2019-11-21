import * as React from "react";

import * as S from "./style";
import { logo } from "./../../assets";
import SearchBar from "./../SearchBar";

interface Props {
  isLogin: boolean;
}

const Header: React.FC<Props> = ({ isLogin }) => (
  <S.HeaderContainer>
    <S.HeaderLogo src={logo} />
    <S.HeaderItemsContainer>
      <SearchBar />
      {isLogin ? (
        <>
          <S.HeaderButton>마이페이지</S.HeaderButton>
          <S.HeaderButton>로그아웃</S.HeaderButton>
        </>
      ) : (
        <S.HeaderButton>로그인</S.HeaderButton>
      )}
    </S.HeaderItemsContainer>
  </S.HeaderContainer>
);

export default Header;
