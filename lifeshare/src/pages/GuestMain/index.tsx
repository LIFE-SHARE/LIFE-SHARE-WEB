import * as React from "react";

import { Header, HouseList } from "./../../container";
import { getAllHouse } from "./../../service/get";
import * as S from "./style";

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

const GuestMain: React.FC<Props> = ({ isLogin }) => {
  const [houses, setHouses] = React.useState<House[]>([]);

  React.useEffect(() => {
    loadAllHouse();
  }, []);

  const loadAllHouse = async (houseId?: number) => {
    try {
      const response = await getAllHouse(houseId);
      setHouses(response.data.data.house_data);
      console.log(response);
    } catch (error) {
      console.log(error.response.data.status);
    }
  };

  return (
    <div>
      <Header isLogin={isLogin} />
      <S.GuestMainContainer>
        <S.GuestMainMsg>
          <S.GuestMainSubText>최신 업로드된 하우스들이</S.GuestMainSubText>
          <S.GuestMainText>당신을 기다리고 있어요!</S.GuestMainText>
        </S.GuestMainMsg>
        <HouseList houses={houses} />
      </S.GuestMainContainer>
    </div>
  );
};

export default GuestMain;
