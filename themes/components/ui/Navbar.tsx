/** @format */
import { useTheme, Text, Spacer, Link } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
export const Navbar = () => {
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				padding: "0px 20px",
				backgroundColor: theme?.colors.gray100.value,
			}}
		>
			<Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/101.svg" alt="icon" width={40} height={40} />

			<NextLink href="/" passHref>
				<Link>
					<Text color="white" h2>
						P
					</Text>
					<Text color="white" h3>
						okémon
					</Text>
				</Link>
			</NextLink>

			<Spacer css={{ flex: 1 }} />

			<NextLink href="/favorites" passHref>
				<Link>
					<Text color="white">Favoritos</Text>
				</Link>
			</NextLink>
		</div>
	);
};
