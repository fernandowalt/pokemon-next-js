/** @format */

import { useEffect, useState } from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Button, Card, Grid, Text, Container, Image } from "@nextui-org/react";
import { pokeApi } from "../../api";
import { PokemonFull, PokemonFullName } from "../../interfaces";
import { Layout } from "../../themes/components/layouts";
import { localFavorite } from "../../utils";
import confetti from "canvas-confetti";
import getPokemonData from "../../utils/getPokemonData";

interface Props {
	pokemon: PokemonFull;
}

export const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
	const [isInFavorites, setisInFavorites] = useState(false);

	useEffect(() => {
		setisInFavorites(localFavorite.exitInFavorites(pokemon.id));
	}, [pokemon.id]);

	const handleClick = () => {
		localFavorite.toggleFavorite(pokemon.id);
		setisInFavorites(!isInFavorites);

		if (isInFavorites) return;
		confetti({
			zIndex: 999,
			particleCount: 100,
			spread: 160,
			angle: -100,
			origin: {
				x: 1,
				y: 0,
			},
		});
	};
	return (
		<Layout title={pokemon.name}>
			<Grid.Container css={{ marginTop: "5px" }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card isHoverable css={{ padding: "30px" }}>
						<Card.Body>
							<Card.Image src={pokemon.sprites.other?.dream_world.front_default || "null"} alt={pokemon.name} width="90%" height={200}></Card.Image>
						</Card.Body>
					</Card>
				</Grid>

				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
							<Text transform="capitalize" size={35} css={{ fontFamily: "emoji" }}>
								{pokemon.name}
							</Text>

							<Button bordered={true} color="gradient" auto onPress={handleClick}>
								{isInFavorites ? "En Favoritos" : "Guardar En Favoritos"}
							</Button>
						</Card.Header>

						<Card.Body>
							<Text size={30} css={{ fontFamily: "emoji" }}>
								Sprites:
							</Text>
							<Container display="flex" direction="row" gap={0}>
								<Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async _ctx => {
	const { data } = await pokeApi.get<PokemonFullName>("/pokemon?limit=151");

	const resultado = data.results.map(poke => poke && { params: { name: poke.name } });

	return {
		paths: resultado,
		fallback: false, // false or 'blocking'
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	return {
		props: {
			pokemon: await getPokemonData(name),
		},
	};
};

export default PokemonByNamePage;
