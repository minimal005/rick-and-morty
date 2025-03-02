"use server";
import { Data } from "../types/data";
import axios from "axios";
const url = "https://rickandmortyapi.com/api";

export const getData = async (type: Data) => {
  if (url) {
    const { data } = await axios.get(`${url}/${type}`);
    console.log(data);
    return data.results;
  }
};

export const getCharacterById = async (id: string) => {
  if (id) {
    const { data } = await axios.get(`${url}/character/${id}`);
    return data;
  }
};
