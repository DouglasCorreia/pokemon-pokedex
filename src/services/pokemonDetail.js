import api from "./api";

export const getPokemon = (id) => {
  return api.get(`/${id}/`);
};