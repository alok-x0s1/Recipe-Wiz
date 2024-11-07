import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<section className="min-h-[calc(100vh-6rem)] flex justify-center items-center flex-col gap-4">
			<h1 className="text-7xl font-bold tracking-tight">
				Discover Next Favorite Recipe
			</h1>
			<p className="text-lg max-w-4xl text-center">
				Unlock a world of culinary possibilities with RecipeWiz – your
				go-to app for easy-to-follow recipes, personalized meal
				planning, and cooking inspiration.
			</p>
			<div className="flex gap-6 justify-center items-center">
				<Link
					to="/"
					className="text-lg bg-black text-background py-3 px-6 rounded-md hover:bg-black/80 duration-300"
				>
					Start Cooking
				</Link>
				<Link
					to="/recipes"
					className="text-lg border border-primary py-3 px-6 rounded-md hover:bg-primary/20 duration-300"
				>
					Explore Recipes
				</Link>
			</div>
		</section>
	);
};

export default Hero;
