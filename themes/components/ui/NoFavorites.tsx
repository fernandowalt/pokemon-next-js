/** @format */

import { Container, Text, Image } from "@nextui-org/react";
import React from "react";

export const NoFavorites = () => {
	return (
		<Container
			css={{
				display: "flex",
				flexDirection: "column",
				height: "90vh",
				alignItems: "center",
				justifyContent: "center",
				alignSelf: "center",
			}}
		>
			<Text h1>No hay Favoritos</Text>
			<Image
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/101.svg"
				alt="no-imagen"
				width={250}
				height={250}
				css={{ opacity: 0.1 }}
			/>
		</Container>
	);
};
