import React from "react";
import { useRecipe } from "../context/RecipeContext";
import { Link, useParams } from "react-router-dom";
import RatingStars from "../components/RatingStars";

const SingleRecipe = () => {
	const { recipes } = useRecipe();
	const { recipeId } = useParams();
	const recipe = recipes.find((recipe) => recipe.id === parseInt(recipeId));

	if (!recipe) {
		return <p>Recipe not found</p>;
	}

	return (
		<div className="recipe-detail mt-12 flex justify-between gap-8 w-full">
			<div className="flex flex-col w-[45%]">
				<h1 className="text-3xl font-bold">{recipe.name}</h1>
				<Link
					to={`/recipes/cuisines/${recipe.cuisine}`}
					className="my-2 px-1 border border-primary rounded-sm w-fit"
				>
					{recipe.cuisine}
				</Link>
				<img
					src={recipe.image}
					alt={recipe.name}
					className="w-full h-auto rounded-sm mb-4"
				/>
				<ul className="mt-1 flex flex-wrap gap-2">
					{recipe.tags.map((tag, index) => (
						<Link
							key={index}
							to={`/recipes/tags/${tag}`}
							className="px-2 py-1 bg-primary rounded-sm text-background"
						>
							{tag}
						</Link>
					))}
				</ul>
			</div>
			<div className="flex flex-col w-[55%] pt-12">
				<RatingStars rating={recipe.rating} />
				<ul className="mt-1">
					<h2 className="text-2xl font-semibold">Ingredients:</h2>
					{recipe.ingredients.map((ingredient, index) => (
						<li key={index}>
							{index + 1}. {ingredient}
						</li>
					))}
				</ul>
				<div className="mt-4">
					<h2 className="text-2xl font-semibold">Instructions:</h2>
					<p>{recipe.instructions}</p>
				</div>
				<div className="mt-4">
					<h2 className="text-2xl font-semibold">
						Additional Information:
					</h2>
					<p>
						It's difficulty level is{" "}
						<span
							className={`${
								recipe.difficulty === "Easy"
									? "bg-green-500"
									: recipe.difficulty === "Medium"
									? "bg-yellow-500"
									: "bg-red-500"
							} px-1 py-0.5 rounded-sm`}
						>
							{recipe.difficulty}
						</span>
						, and the meal type is{" "}
						<span className="text-primary hover:underline font-semibold cursor-pointer">
							{recipe.mealType.join(", ")}
						</span>
						.It contains {recipe.ingredients.length} ingredients. It
						takes{" "}
						<span className="font-semibold bg-rose-400 px-1 py-0.5 rounded-sm">
							{recipe.prepTimeMinutes} minutes
						</span>{" "}
						to cook, with calories being {recipe.caloriesPerServing}{" "}
						per serving.
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleRecipe;
