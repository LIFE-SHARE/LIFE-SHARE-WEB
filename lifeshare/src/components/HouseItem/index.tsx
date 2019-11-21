import * as React from "react";

import * as S from "./style";

interface Props {
  image: string;
  houseName: string;
  houseLocation: string;
}

const HouseItem: React.FC<Props> = ({ image, houseName, houseLocation }) => (
  <S.HoustItemContainer>
    <S.HouseItemImg src={image} />
    <S.HouseName>{houseName}</S.HouseName>
    <S.HouseLocation>{houseLocation}</S.HouseLocation>
  </S.HoustItemContainer>
);

export default HouseItem;
