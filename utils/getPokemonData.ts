/** @format */

import { pokeApi } from "../api";
import { PokemonFull } from "../interfaces";

const getPokemonData = async (nameOrId: string) => {
	try {
		const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${nameOrId}`);

		const { name, id, sprites } = data;

		return { name, id, sprites };
	} catch (error) {
		return null;
	}
};

export default getPokemonData;
