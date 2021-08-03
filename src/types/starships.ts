export interface StarshipDto {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: string[],
    films: string[],
    created: string;
    edited: string;
    url: string;
}

export interface StarshipsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: StarshipDto[];
}

export interface StarshipEntity {
    name: string;
    model: string;
    manufacturer: string;
    costInCredits: number | string;
    length: number | string;
    maxAtmospheringSpeed: number | string;
    crew: number | string;
    passengers: number | string;
    cargoCapacity: number | string;
    consumables: string;
    hyperdriveRating: number | string;
    MGLT: number | string;
    starshipClass: string;
    url: string;
}