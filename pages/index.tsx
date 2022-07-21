/** @format */

import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { Layout } from "../themes/components/layouts";
import { pokeApi } from "../api";
import { PokemonListResponse, Result } from "../interfaces";
import { PokeCard } from "../themes/components/pokemon";

interface Props {
	pokemons: Result[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<Layout title="Listado de Pokemons">
			<Grid.Container gap={2} justify="flex-start">
				{pokemons.map(pok => (
					<PokeCard pokemon={pok} key={pok.id} />
				))}
			</Grid.Container>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async __ctx => {
	const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151&offset=0");

	const pokemons = data.results.map((pokemon, idx) => {
		return {
			...pokemon,
			img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx + 1}.svg`,

			id: idx + 1,
		};
	});

	return {
		props: {
			pokemons,
		},
	};
};

export default HomePage;
