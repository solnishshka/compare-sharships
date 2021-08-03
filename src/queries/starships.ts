import { useQuery } from "react-query";
import { fetchStarships } from "../services/starships";

export const useStarships = (page: number) => {
    return useQuery(['starships', page], () => fetchStarships(page), { keepPreviousData : true });
}
