import * as React from "react";

import { SmallRoomInfo as SmallRoomInfoComponent } from "./../../components";

interface Props {
  roomData: { id: number, house_id: number, peopleCnt: number, money: string, imageData: string }[];
}

const SmallRoomInfo: React.FC<Props> = ({ roomData }) => (
  <div>
    {roomData.map(room => (
      <SmallRoomInfoComponent
        image={room.imageData}
        money={room.money}
        peopleCnt={room.peopleCnt}
      />
    ))}
  </div>
);

export default SmallRoomInfo;
