import { IPokemon } from "../interfaces/pokemon.interface";

export class Pokemon {
    _id?: string;
    nickname?: string;
    level?: number;

    constructor(pokemon: IPokemon | string) {
        if (typeof pokemon === "string") {
            this._id = pokemon;
            return this;
        }

        this._id = pokemon._id;
        this.nickname = pokemon.nickname;
        this.level = pokemon.level;
    }

    public static build(pokemon: IPokemon) {
        return new Pokemon(pokemon);
    }
}