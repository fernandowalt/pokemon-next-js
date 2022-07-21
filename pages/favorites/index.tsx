/** @format */

import { useState, useEffect } from "react";
import { Layout } from "../../themes/components/layouts";
import { FavoritesPokemon } from "../../themes/components/pokemon";
import { NoFavorites } from "../../themes/components/ui";
import { localFavorite } from "../../utils";

export const FavoritesPages = () => {
	const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

	useEffect(() => {
		setFavoritePokemons(localFavorite.pokemons());
	}, []);

	return <Layout title="Favoritos">{favoritePokemons.length > 0 ? <FavoritesPokemon arrayId={favoritePokemons} /> : <NoFavorites />}</Layout>;
};

export default FavoritesPages;
