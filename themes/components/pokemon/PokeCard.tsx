/** @format */

import { Text, Card, Row, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { Result } from "../../../interfaces/pokemon_list";

interface Poke {
	pokemon: Result;
}

export const PokeCard: FC<Poke> = ({ pokemon }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/name/${pokemon.name}`);
	};
	const { name, img, id } = pokemon;
	return (
		<Grid xs={6} sm={3} md={2} xl={1} key={id}>
			<Card isHoverable isPressable onPress={handleClick}>
				<Card.Header>
					<Row justify="center">
						<Text color="warning">#{id}</Text>
					</Row>
				</Card.Header>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={img} width="100%" height={140} css={{ paddingTop: 10 }} />
				</Card.Body>
				<Card.Footer>
					<Row justify="center">
						<Text transform="capitalize" color="warning">
							{name}
						</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
