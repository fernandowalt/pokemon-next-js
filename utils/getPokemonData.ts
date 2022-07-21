/** @format */

import { pokeApi } from "../api";
import { PokemonFull } from "../interfaces";

const getPokemonData = async (nameOrId: string) => {
	const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${nameOrId}`);

	const { name, id, sprites } = data;

	return { name, id, sprites };
};

export default getPokemonData;
