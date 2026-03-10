import api from "./api";

export const searchPokemon = (search) => {
    try {
        const response = api.get(`/${search.toLowerCase()}?limit=1&offset=0`);

        return response;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null; 
        } else {
            throw error;
        }
    }
}