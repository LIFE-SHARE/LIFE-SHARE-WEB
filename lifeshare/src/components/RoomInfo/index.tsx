import * as React from "react";

import * as S from "./style";

interface Props {
  image: string;
  title: string;
  address: string;
  genderLimit: string;
  ageLimit: number;
  contractperiod: string;
  information: string;
  isLogin: boolean;
  handleModalOpened(status: boolean): void;
}

const RoomInfo: React.FC<Props> = ({
  image,
  title,
  address,
  genderLimit,
  ageLimit,
  contractperiod,
  information,
  isLogin,
  handleModalOpened
}) => (
  <S.RoomInfoContainer>
    <S.RoomInfoCoverContainer>
      <S.RoomInfoImage src={image} />
      <S.RoomInfoCoverContents>
        <S.RoomInfoTitle>{title}</S.RoomInfoTitle>
        <div>
          <S.RoomInfoKind>위치</S.RoomInfoKind>
          <S.RoomInfoContent>{address}</S.RoomInfoContent>
        </div>
        <div>
          <S.RoomInfoKind>성별 제한</S.RoomInfoKind>
          <S.RoomInfoContent>{genderLimit}</S.RoomInfoContent>
        </div>
        <div>
          <S.RoomInfoKind>나이 제한</S.RoomInfoKind>
          <S.RoomInfoContent>만 {ageLimit}세 이상</S.RoomInfoContent>
        </div>
        <div>
          <S.RoomInfoKind>최소 계약 기간</S.RoomInfoKind>
          <S.RoomInfoContent>{contractperiod}</S.RoomInfoContent>
        </div>
        {isLogin && (
          <S.RoomInfoApplyBtn
            onClick={() => {
              handleModalOpened(false);
            }}
          >
            방문 신청
          </S.RoomInfoApplyBtn>
        )}
      </S.RoomInfoCoverContents>
    </S.RoomInfoCoverContainer>
    <S.RoomInfoKind>상세 정보</S.RoomInfoKind>
    <S.RoomInfoDetail>{information}</S.RoomInfoDetail>
  </S.RoomInfoContainer>
);

export default RoomInfo;
