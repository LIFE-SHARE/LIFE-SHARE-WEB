import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 32px;
  border: solid 1px #BBBBBB;
`;

export const SearchBarSearchIcon = styled.img`
  opacity: 0.6;
  display: inline-block;
  margin: 6px;
  width: 16px;
  height: 16px;
`;

export const SearchBarInput = styled.input`
  all: unset;
  display: inline-block;
  margin: 6px;
  height: 28px;
  width: 260px;
  color: #707070;
  font-size: 18px;
  font-weight: lighter;
`;
