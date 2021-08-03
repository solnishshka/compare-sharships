import { StarshipEntity } from "../types/starships";

export const BASE_API_URL = 'https://swapi.dev/api';

export const initialState = {
    comparedStarshipsReducer: {
        starships: [] as StarshipEntity[],
    }
}