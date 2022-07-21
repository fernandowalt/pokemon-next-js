/** @format */

import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
	pokemonId: number;
}

export const FavoriteCardPokemon: NextPage<Props> = ({ pokemonId }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/pokemon/${pokemonId}`);
	};
	return (
		<Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={handleClick}>
			<Card isHoverable={true} isPressable={true} css={{ padding: 10 }}>
				<Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} />
			</Card>
		</Grid>
	);
};
