import { Url } from "../components/main-section/type";
import { KEY } from "./data";

export const getUrls = () => {
  try {
    const urls = localStorage.getItem(KEY);
    return urls ? JSON.parse(urls) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const saveUrl = (url: Url) => {
  try {
    const urls = getUrls();
    const updatedUrls = [url, ...urls];
    localStorage.setItem(KEY, JSON.stringify(updatedUrls));
  } catch (error) {
    console.log(error);
  }
};
