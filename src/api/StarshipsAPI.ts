import axios from 'axios';
import { BASE_API_URL } from '../config/consts';
import { StarshipsResponse } from '../types/starships';

export const getStarships = (page: number) => {
    return axios.get<StarshipsResponse>(`${BASE_API_URL}/starships?page=` + page).then(({data}) => data);
}