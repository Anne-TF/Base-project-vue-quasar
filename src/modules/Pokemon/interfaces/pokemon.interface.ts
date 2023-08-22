export interface PokemonInterface {
    count: number;
    next: string;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[] | ExtendedPokemonInterface[];
}

export interface ExtendedPokemonInterface {
    abilities: object[];
    forms: {name: string; url: string}[];
    game_indices: object[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: object[];
    name: string;
    order: number;
    past_types: any[];
    species: object;
    sprites: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    };
    stats: {
        base_stat: number;
        effort: number;
    }[];
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        }[];
    }[];
    weight: number;
}
