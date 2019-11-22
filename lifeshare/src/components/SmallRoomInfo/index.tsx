import * as React from "react";

import * as S from "./style";
import { baseUrl } from "./../../service/endpoint";

interface Props {
  image: string;
  money: string;
  peopleCnt: number;
}

const SmallRoomInfo: React.FC<Props> = ({ image, money, peopleCnt }) => (
  <S.SmallRoomInfoContainer>
    <S.SmallRoomInfoImg src={`${baseUrl}/${image}`} />
    <div>
      <S.SmallRoomInfoMoney>{money}</S.SmallRoomInfoMoney>
      <S.SmallRoomInfoContent>{peopleCnt}인실</S.SmallRoomInfoContent>
    </div>
  </S.SmallRoomInfoContainer>
);

export default SmallRoomInfo;
