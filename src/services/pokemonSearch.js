import api from "./api";

export const searchPokemon = (search) => {
    try {
        const response = api.get(`/${search.toLowerCase()}`);

        return response;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null; 
        } else {
            throw error;
        }
    }
}