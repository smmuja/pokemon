import axios from "axios";

const baseURL = import.meta.env.VITE_POKEMON_API_BASE_URL;

export const baseApi = axios.create({
  baseURL,
});
