import api from "./api";

export const getPokemons = (limit, offset) => {
  return api.get(`?limit=${limit}&offset=${offset}`);
};