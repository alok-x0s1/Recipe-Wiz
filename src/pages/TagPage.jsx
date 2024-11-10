import React from "react";
import { useRecipe } from "../context/RecipeContext";
import { useParams } from "react-router-dom";
import Recipe from "../components/Recipe";

const TagPage = () => {
	const { tag } = useParams();
	const { recipes } = useRecipe();

	const filteredRecipes = recipes.filter((recipe) =>
		recipe.tags.includes(tag)
	);
	return (
		<div className="mt-12 min-h-screen">
			<h1 className="text-3xl font-bold">
				Explore recipes by tag: &ldquo; {tag} &rdquo;
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

export default TagPage;
