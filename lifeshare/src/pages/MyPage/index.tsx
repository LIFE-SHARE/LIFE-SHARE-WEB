import * as React from "react";

import { Header, HouseList } from "./../../container";
import * as S from "./style";
import { getWaitingHouse } from "./../../service/get";

interface Props {
  isLogin: boolean;
}

interface House {
  id: number;
  userId: string;
  name: string;
  address: string;
  genderLimit: number;
  ageLimit: number;
  maxMember: number;
  contractperiod: string;
  information: string;
  imageData: string;
  join_date: string;
}

const MyPage: React.FC<Props> = ({ isLogin }) => {
  const [houses, setHouses] = React.useState<House[]>([]);
  const [listStatus, setListStatus] = React.useState<number>(0);
  const buttonStatus: string[] = [
    "방문 신청 중인 하우스",
    "방문 신청 수락된 하우스"
  ];
  const changeList = () => {
    if (listStatus === 0) setListStatus(1);
    else setListStatus(0);
  };

  const setWaitingHouse = async () => {
    try {
      const { data } = await getWaitingHouse();
      debugger;
      setHouses(data.data.resultList);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  React.useEffect(() => {
    setWaitingHouse();
  }, []);

  return (
    <div>
      <Header isLogin={isLogin} />
      <S.MyPageContainer>
        <S.MyPageButton onClick={() => changeList()}>
          {buttonStatus[listStatus]} 보기
        </S.MyPageButton>
        {listStatus === 0 ? (
          <S.MyPageListStatus>{buttonStatus[1]}</S.MyPageListStatus>
        ) : (
          <>
            <S.MyPageListStatus>{buttonStatus[0]}</S.MyPageListStatus>
            <HouseList houses={houses} />
          </>
        )}
      </S.MyPageContainer>
    </div>
  );
};

export default MyPage;
