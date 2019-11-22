import styled from "styled-components";

export const RoomInfoContainer = styled.div`
  margin: 80px 392px;
`;

export const RoomInfoCoverContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
`;

export const RoomInfoCoverContents = styled.div`
  flex: 1;
`;

export const RoomInfoImage = styled.img`
  display: inline-block;
  width: 400px;
  height: 300px;
  object-fit: cover;
  margin-right: 40px;
`;

export const RoomInfoTitle = styled.h1`
  margin-bottom: 40px;
  font-size: 34px;
  color: #343434;
`;

export const RoomInfoKind = styled.h2`
  display: inline-block;
  margin: 0 20px 20px 0;
  font-size: 20px;
  color: #343434;
`;

export const RoomInfoContent = styled.p`
  display: inline-block;
  font-size: 20px;
  color: #434343;
`;

export const RoomInfoDetail = styled.p`
  font-size: 20px;
  color: #434343;
`;

export const RoomInfoApplyBtn = styled.button`
  border-radius: 8px;
  text-align: center;
  width: 100px;
  height: 36px;
  font-size: 20px;
  color: white;
  background-color: #EAA806;
`;