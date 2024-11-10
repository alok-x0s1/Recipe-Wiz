import React from "react";
import { useParams } from "react-router-dom";
import { useRecipe } from "../context/RecipeContext";
import Recipe from "../components/Recipe";

const AlphabetPage = () => {
	const { letter } = useParams();
	const { recipes } = useRecipe();

	const filteredRecipes = recipes.filter((recipe) =>
		recipe.name.toLowerCase().startsWith(letter)
	);
	return (
		<div className="mt-12 min-h-screen">
			<h1 className="text-3xl font-bold">
				Explore recipes starting with letter &ldquo; {letter} &rdquo;
			</h1>

			<div className="flex flex-wrap justify-start gap-8 mt-8">
				{filteredRecipes && filteredRecipes.length > 0 ? (
					filteredRecipes.map((recipe) => (
						<Recipe key={recipe.id} recipe={recipe} />
					))
				) : (
					<p className="text-2xl font-bold">
						Sorry, No recipes found!
					</p>
				)}
			</div>
		</div>
	);
};

export default AlphabetPage;
