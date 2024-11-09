import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
	return (
		<Link
			to={`/recipes/${recipe.id}`}
			className="flex flex-col border border-gray-800 rounded-sm w-[320px] relative h-fit hover:scale-105 duration-300"
		>
			<img
				src={recipe.image}
				alt={recipe.name.split(" ").join("_")}
				className="w-full h-60 object-cover rounded-sm"
				loading="lazy"
			/>
			<div
				className={`absolute rounded-sm top-2 right-2 text-primary text-sm px-1 ${
					recipe.difficulty === "Easy"
						? "bg-green-500"
						: recipe.difficulty === "Medium"
						? "bg-yellow-500"
						: "bg-red-500"
				}`}
			>
				{recipe.difficulty}
			</div>
			<div className="p-2">
				<h2 className="text-xl">{recipe.name}</h2>
				<p className="text-lg">{recipe.description}</p>
			</div>
		</Link>
	);
};

export default Recipe;
