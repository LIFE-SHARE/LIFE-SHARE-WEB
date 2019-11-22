import axios from "axios";

import { baseUrl } from "./endpoint";
import { getAccessToken } from "./localstorageservice";

export const getAllHouse = async (houseId?: number) => {
  const response = await axios.get(`${baseUrl}/house`, {
    headers: { "x-access-token": getAccessToken },
    params: { houseId: houseId }
  });

  return response;
};

export const getWaitingHouse = async () => {
  try {
    return axios.get(`${baseUrl}/house/apply/getWaitApply`, {
      headers: {
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhbHNrdDA0MTkiLCJ1c2VyRGF0YSI6eyJpZCI6ImFsc2t0MDQxOSIsIm5hbWUiOiLsmKTtlbTshLEiLCJwaG9uZV9udW1iZXIiOiIwMTAyMzIzMjMyIiwiZ2VuZGVyIjowLCJhZ2UiOjE4LCJhdXRoIjowLCJqb2luX2RhdGUiOiIyMDE5LTExLTIxVDAwOjAwOjAwLjAwMFoiLCJlbWFpbCI6ImFsc2t0MDQxOUBuYXZlci5jb20ifSwiaWF0IjoxNTc0Mzg2MzY5LCJleHAiOjE1Nzk1NzAzNjksInN1YiI6InRva2VuIn0.1v9TrJPdrIXKjGE9IHQj-zVWYGfMt_6kqitk8ZdJzUA"
      }
    });
  } catch (error) {
    throw error;
  }
};
