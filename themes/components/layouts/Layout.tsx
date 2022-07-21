/** @format */

import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";

type Props = {
	children: ReactNode;
	title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || "PokemonApp"}</title>
				<meta name="author" content="Walter Gomez" />
				<meta name="description" content="Información sobre el pokemon xxxx" />
				<meta name="Keywords" content={`${title},pokemon,pokedex`} />
				<meta property="og:title" content={`Informacion sobre${title}`} />
				<meta property="og:description" content={`Esta es la informacion sobre${title}`} />
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>

			<Navbar />

			<main
				style={{
					padding: "0px 20px",
				}}
			>
				{children}
			</main>
		</>
	);
};
