import * as React from "react";

import { Header, RoomInfo, SmallRoomInfo, Apply } from "./../../container";
import { getAllHouse } from "./../../service/get";
import { RouteComponentProps, withRouter } from "react-router";

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

interface Props
  extends RouteComponentProps<{
    id: string;
  }> {
  isLogin: boolean;
}

const Post: React.FC<Props> = ({ match, isLogin }) => {
  const [houseInfo, setHouseInfo] = React.useState<House>({
    house_data: {
      id: 0,
      userId: "",
      name: "",
      address: "",
      genderLimit: "",
      ageLimit: 0,
      maxMember: 0,
      contractperiod: "",
      information: "",
      imageData: "",
      join_date: ""
    },
    room_data: [
      {
        id: 0,
        house_id: 0,
        peopleCnt: 0,
        money: "",
        imageData: ""
      }
    ]
  });

  React.useEffect(() => {
    getHouseData(parseInt(match.params.id));
  }, []);

  const getHouseData = async (houseId: number) => {
    try {
      const response = await getAllHouse(houseId);

      if (response.data.status === 200) {
        setHouseInfo(response.data.data);
      }
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <Header isLogin={isLogin} />
      <RoomInfo isLogin={isLogin} house={houseInfo} />
      <SmallRoomInfo roomData={houseInfo.room_data} />
    </div>
  );
};

export default withRouter(Post);
