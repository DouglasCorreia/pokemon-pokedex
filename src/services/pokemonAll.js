import api from "./api";

export const getAllPokemons = () => {
  return api.get(`?limit=10000&offset=0`);
};