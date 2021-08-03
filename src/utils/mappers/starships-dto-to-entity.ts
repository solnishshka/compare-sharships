import { StarshipDto, StarshipEntity } from "../../types/starships";
import { checkNaN } from "../checkNaN";

export const starshipsDtoToEntity = (data: StarshipDto): StarshipEntity => {
    return ({
        name: data.name,
        model: data.model,
        starshipClass: data.starship_class,
        manufacturer: data.manufacturer,
        costInCredits: checkNaN(data.cost_in_credits),
        length: checkNaN(data.length),
        maxAtmospheringSpeed: checkNaN(data.max_atmosphering_speed),
        crew: checkNaN(data.crew),
        passengers: checkNaN(data.passengers),
        cargoCapacity: checkNaN(data.cargo_capacity),
        MGLT: checkNaN(data.MGLT),
        hyperdriveRating: checkNaN(data.hyperdrive_rating),
        consumables: data.consumables,
        url: data.url,
    })
}