import axios from "axios";

import { baseUrl } from "./endpoint";

export const submitLoginInfo = async (id: string, pw: string) => {
    const response = await axios.post(`${baseUrl}/auth/login`, {pw: pw, id: id}, {"Content-type": "Application/json"});

    return response;
}