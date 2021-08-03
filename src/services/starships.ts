import { getStarships } from "../api/StarshipsAPI"
import { starshipsDtoToEntity } from "../utils/mappers/starships-dto-to-entity";

export const fetchStarships = async (page: number) => {
    const response = await getStarships(page);

    return { starships: response.results.map((item) => starshipsDtoToEntity(item)), hasNext: response.next, count: response.count }; 
}