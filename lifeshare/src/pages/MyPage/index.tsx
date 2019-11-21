import * as React from "react";

import { Header, HouseList } from "./../../container";
import * as S from "./style";
import { dummy } from "./dummy";

interface Props {
  isLogin: boolean;
}

const MyPage: React.FC<Props> = ({ isLogin }) => {
  const [listStatus, setListStatus] = React.useState<number>(0);
  const buttonStatus: string[] = [
    "방문 신청 중인 하우스",
    "방문 신청 수락된 하우스"
  ];
  const changeList = () => {
    if (listStatus === 0) setListStatus(1);
    else setListStatus(0);
  };

  return (
    <div>
      <Header isLogin={isLogin} />
      <S.MyPageContainer>
        <S.MyPageButton onClick={() => changeList()}>
          {buttonStatus[listStatus]} 보기
        </S.MyPageButton>
        <S.MyPageListStatus>
          {listStatus === 0 ? buttonStatus[1] : buttonStatus[0]}
        </S.MyPageListStatus>
        <HouseList houses={dummy} />
      </S.MyPageContainer>
    </div>
  );
};

export default MyPage;
