import * as React from "react";

import { Header, HouseList } from "./../../container";
import { submitSearchKeyword } from "./../../service/post";
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

const Search: React.FC<Props> = ({ isLogin }) => {
  const [houses, setHouses] = React.useState<House[]>([]);
  const [keyword, setKeyword] = React.useState<string>("");

  React.useEffect(() => {
    loadSearchHouse(keyword);
  });

  const loadSearchHouse = async (keywords: string) => {
    try {
      const response = await submitSearchKeyword(keywords);
      setHouses(response.data.data.house_data);
    } catch (error) {
      console.log(error.response.data.status);
    }
  };
  return (
    <div>
      <Header isLogin={isLogin} />
      <S.SearchContainer>
        <S.SearchMsg>
          <S.SearchSubText>최신 업로드된 하우스들이</S.SearchSubText>
          <S.SearchText>당신을 기다리고 있어요!</S.SearchText>
        </S.SearchMsg>
        <HouseList houses={houses} />
      </S.SearchContainer>
    </div>
  );
};

export default Search;
