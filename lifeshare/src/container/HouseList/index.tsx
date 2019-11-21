import * as React from "react";

import * as S from "./style";
import { HouseItem } from "./../../components";

interface House {
  image: string;
  name: string;
  location: string;
}

interface Props {
  houses: House[];
}

const HouseList: React.FC<Props> = ({ houses }) => (
  <S.HouseListContainer>
    {houses.map(house => (
      <HouseItem
        houseName={house.name}
        houseLocation={house.location}
        image={house.image}
      />
    ))}
  </S.HouseListContainer>
);

export default HouseList;
