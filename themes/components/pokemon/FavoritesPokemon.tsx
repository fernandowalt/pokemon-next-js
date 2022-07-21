/** @format */

import { Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
	arrayId: number[];
}

export const FavoritesPokemon: NextPage<Props> = ({ arrayId }) => {
	return (
		<Grid.Container gap={2} direction="row" justify="flex-start">
			{arrayId.map(id => (
				<FavoriteCardPokemon pokemonId={id} key={id} />
			))}
		</Grid.Container>
	);
};
