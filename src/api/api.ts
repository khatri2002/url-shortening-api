import axios from "axios";
import { API } from "./data";

export const shortenUrl = (url: string): Promise<any> => {
  return axios
    .post(API, { url })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error in shortenUrl:", error);
      throw error;
    });
};
