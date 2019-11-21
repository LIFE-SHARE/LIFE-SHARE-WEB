import * as React from "react";

import { Header, HouseList } from "./../../container";
import { dummy } from "./dummy";
import * as S from "./style";

interface Props {
  isLogin: boolean;
}

const GuestMain: React.FC<Props> = ({ isLogin }) => (
  <div>
    <Header isLogin={isLogin} />
    <S.GuestMainContainer>
      <S.GuestMainMsg>
        <S.GuestMainSubText>최신 업로드된 하우스들이</S.GuestMainSubText>
        <S.GuestMainText>당신을 기다리고 있어요!</S.GuestMainText>
      </S.GuestMainMsg>
      <HouseList houses={dummy} />
    </S.GuestMainContainer>
  </div>
);

export default GuestMain;
