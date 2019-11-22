import styled from "styled-components";

export const ApplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 600px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  border: solid 1px #dedede;
`;

// export const Apply

export const ApplyInput = styled.input`
  all: unset;
  margin: 40px 0;
  font-weight: lighter;
  border-bottom: solid 1px #bcbcbc;
  width: 400px;
  padding: 10px;
  font-size: 24px;
  color: #434343;
`;

export const ApplyInfo = styled.p`
  font-size: 20px;
  color: #434343;
`;

export const ApplyButton = styled.button`
  border-radius: 8px;
  text-align: center;
  width: 100px;
  height: 40px;
  font-size: 20px;
  margin: 10px;
  color: white;
  background-color: #eaa806;
`;

export const ApplyCancelButton = styled.button`
  border-radius: 8px;
  text-align: center;
  width: 100px;
  height: 40px;
  font-size: 20px;
  color: white;
  margin: 10px;
  background-color: #bcbcbc;
`;
