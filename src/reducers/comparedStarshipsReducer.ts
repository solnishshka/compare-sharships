import { StarshipEntity } from '../types/starships';

import {ActionType, createAction, createReducer} from 'typesafe-actions';

export interface ComparedStarshipsReducer {
    starships: StarshipEntity[];
}

const defaultState: ComparedStarshipsReducer = {
    starships: [],
};

export const actions = {
    setAddStarship: createAction(
        'comparedStarships/ADD_STARSHIP', 
        (starship: StarshipEntity) => (starship))<StarshipEntity>(),
    setRemoveStarship: createAction('comparedStarships/REMOVE_STARSHIP', 
        (name: string) => (name))<string>(),
    setReset: createAction('comparedStarships/RESET')<void>(),
};

const comparedStarshipsReducer = createReducer<ComparedStarshipsReducer, ActionType<typeof actions>>(defaultState)
    .handleAction(
        actions.setAddStarship,
        (state, action) => ({...state, starships: [...state.starships, action.payload]}),
    )
    .handleAction(
        actions.setRemoveStarship,
        (state, action) => ({...state, starships: [...state.starships.filter(item => item.name !== action.payload)]}),
    )
    .handleAction(
        actions.setReset,
        (state) => ({...state, starships: []}),
    );

export default comparedStarshipsReducer;
