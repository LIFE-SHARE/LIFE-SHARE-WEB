import * as React from "react";

import * as S from "./style";
import { submitApplyMessage } from "./../../service/post";

interface Props {
  houseId: number;
  handleModalOpened(status: boolean): void;
}

const Apply: React.FC<Props> = ({ houseId, handleModalOpened }) => {
  const [message, setMessage] = React.useState<string>("");
  const applyMessage = async (houseId: number, msg: string) => {
    try {
      const response = await submitApplyMessage(houseId, msg);

      if (response.data.status === 200) {
        handleModalOpened(true);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <S.ApplyContainer>
      <S.ApplyInfo>방문 수락 여부는 메일로 안내드립니다.</S.ApplyInfo>
      <S.ApplyInput
        placeholder="메시지를 입력해 주세요"
        value={message}
        onChange={e => {
          setMessage(e.target.value);
        }}
      />
      <div>
        <S.ApplyButton
          onClick={() => {
            applyMessage(houseId, message);
          }}
        >
          신청
        </S.ApplyButton>
        <S.ApplyCancelButton
          onClick={() => {
            handleModalOpened(true);
          }}
        >
          취소
        </S.ApplyCancelButton>
      </div>
    </S.ApplyContainer>
  );
};

export default Apply;
