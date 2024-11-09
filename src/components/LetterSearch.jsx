import React from "react";
import { Link } from "react-router-dom";

export const LetterSearch = () => {
	const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

	return (
		<div className="flex flex-col gap-4 mt-12">
			<h2 className="text-2xl font-bold">
				Search recipes by first letter
			</h2>
			<ul className="flex gap-2">
				{alphabets.map((letter, index) => (
					<li key={letter} className="flex items-center text-xl">
						<Link to={`/recipes/alphabets/${letter.toLowerCase()}`}>
							{letter}
						</Link>
						{index < alphabets.length - 1 && (
							<span className="mx-2 text-gray-500">|</span>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};
