import * as React from "react";

import { RoomInfo as RoomInfoComponent } from "./../../components";
import { Apply } from "./../../container";
import { baseUrl } from "./../../service/endpoint";

interface Props {
  house: House;
  isLogin: boolean;
}

interface House {
  house_data: {
    id: number;
    userId: string;
    name: string;
    address: string;
    genderLimit: string;
    ageLimit: number;
    maxMember: number;
    contractperiod: string;
    information: string;
    imageData: string;
    join_date: string;
  };
  room_data: {
    id: number;
    house_id: number;
    peopleCnt: number;
    money: string;
    imageData: string;
  }[];
}

const RoomInfo: React.FC<Props> = ({ house, isLogin }) => {
  const [isModalOpened, setIsModalOpened] = React.useState<boolean>(false);

  const handleModalOpened = (status: boolean) => setIsModalOpened(!status);

  return (
    <div>
      {isModalOpened && (
        <Apply
          houseId={house.house_data.id}
          handleModalOpened={handleModalOpened}
        />
      )}
      <RoomInfoComponent
        handleModalOpened={handleModalOpened}
        isLogin={isLogin}
        image={`${baseUrl}/${house.house_data.imageData}`}
        title={house.house_data.name}
        address={house.house_data.address}
        genderLimit={house.house_data.genderLimit}
        ageLimit={house.house_data.ageLimit}
        contractperiod={house.house_data.contractperiod}
        information={house.house_data.information}
      />
    </div>
  );
};

export default RoomInfo;
