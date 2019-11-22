import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";
import { HouseItem } from "./../../components";
import { baseUrl } from "./../../service/endpoint";

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

interface Props {
  houses: House[];
}

const HouseList: React.FC<Props> = ({ houses }) => (
  <S.HouseListContainer>
    {houses.map(house => (
      <Link to={`/post/${house.id}`}>
        <HouseItem
          houseName={house.name}
          houseLocation={house.address}
          image={`${baseUrl}/${house.imageData}`}
        />
      </Link>
    ))}
  </S.HouseListContainer>
);

export default HouseList;
