import {createSelector} from 'reselect';
import { StarshipEntity } from '../types/starships';

export const comparedStarshipsSelector = createSelector(
    (state: {
        comparedStarshipsReducer: {
            starships: StarshipEntity[];
        };
    }) => state.comparedStarshipsReducer.starships,
    (starships: StarshipEntity[]) => ([...starships]),
);
