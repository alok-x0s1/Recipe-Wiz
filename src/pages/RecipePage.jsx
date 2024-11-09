import React, { useState } from "react";
import { useRecipe } from "../context/RecipeContext";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { LetterSearch } from "../components/LetterSearch";
import Recipe from "../components/Recipe";

const RecipePage = () => {
	const { recipes } = useRecipe();
	const [currentPage, setCurrentPage] = useState(1);
	const recipePerpage = 7;
	const [searchTerm, setSearchTerm] = useState("");
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const [selectedCuisine, setSelectedCuisine] = useState("");
	const [selectedMealType, setSelectedMealType] = useState("");
	const [selectedTime, setSelectedTime] = useState("");
	const [selectedDifficulty, setSelectedDifficulty] = useState("");

	const indexOfLastRecipe = currentPage * recipePerpage;
	const indexOfFirstRecipe = indexOfLastRecipe - recipePerpage;

	const filteredRecipes = recipes
		.filter((recipe) =>
			recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
		.filter(
			(recipe) => !selectedCuisine || recipe.cuisine === selectedCuisine
		)
		.filter(
			(recipe) =>
				!selectedMealType || recipe.mealType.includes(selectedMealType)
		)
		.filter(
			(recipe) => !selectedTime || recipe.cookTimeMinutes <= selectedTime
		)
		.filter(
			(recipe) =>
				!selectedDifficulty || recipe.difficulty === selectedDifficulty
		);

	const currentRecipe = filteredRecipes.slice(
		indexOfFirstRecipe,
		indexOfLastRecipe
	);
	const totalPages = Math.ceil(filteredRecipes.length / recipePerpage);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const resetFilters = () => {
		setSelectedCuisine("");
		setSelectedMealType("");
		setSelectedTime("");
		setSelectedDifficulty("");
		setCurrentPage(1);
		setIsFilterOpen(false);
	};

	const applyFilters = () => {
		setCurrentPage(1);
		setIsFilterOpen(false);
	};

	return (
		<div className="flex flex-col gap-4 min-h-screen mt-12">
			<h1 className="text-4xl font-bold leading-6">
				Find Your Next Favorite Recipe
			</h1>
			<p className="text-lg text-primary/90">
				Unlock a world of culinary possibilities with RecipeWiz.
			</p>

			<div className="flex gap-4 items-center">
				<input
					type="text"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
						setCurrentPage(1);
					}}
					placeholder="Search recipes here..."
					className="border border-gray-500 rounded-sm bg-transparent px-4 py-2 focus:border-gray-700 focus:outline-none text-primary w-80 placeholder:text-primary/60 capitalize"
				/>
				<button
					onClick={() => setIsFilterOpen(true)}
					className="text-lg border border-primary py-2 px-4 rounded-md hover:bg-primary/20 duration-300 flex items-center gap-2"
				>
					<SlidersHorizontal /> Filter
				</button>
			</div>

			{isFilterOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-background p-6 rounded-md shadow-lg w-11/12 max-w-2xl">
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-2xl font-bold text-primary">
								Filter Recipes
							</h2>
							<button
								onClick={() => setIsFilterOpen(false)}
								className="text-gray-600 hover:text-red-500 duration-300"
							>
								<X size={24} />
							</button>
						</div>

						<div className="space-y-6 mb-6">
							<div>
								<p className="text-lg font-semibold mb-2">
									Cuisine
								</p>
								<div className="flex gap-2">
									{[
										"All Cuisines",
										"Italian",
										"Mexican",
										"Indian",
									].map((cuisine) => (
										<button
											key={cuisine}
											onClick={() =>
												setSelectedCuisine(
													cuisine === "All Cuisines"
														? ""
														: cuisine
												)
											}
											className={`px-4 py-2 rounded-lg ${
												selectedCuisine === cuisine
													? "bg-primary text-background"
													: "bg-primary/10 text-primary hover:bg-primary/20"
											} transition duration-300`}
										>
											{cuisine}
										</button>
									))}
								</div>
							</div>

							<div>
								<p className="text-lg font-semibold mb-2">
									Meal Type
								</p>
								<div className="flex gap-2">
									{[
										"All Meal Types",
										"Breakfast",
										"Lunch",
										"Dinner",
									].map((mealType) => (
										<button
											key={mealType}
											onClick={() =>
												setSelectedMealType(
													mealType ===
														"All Meal Types"
														? ""
														: mealType
												)
											}
											className={`px-4 py-2 rounded-lg ${
												selectedMealType === mealType
													? "bg-primary text-background"
													: "bg-primary/10 text-primary hover:bg-primary/20"
											} transition duration-300`}
										>
											{mealType}
										</button>
									))}
								</div>
							</div>

							<div>
								<p className="text-lg font-semibold mb-2">
									Time
								</p>
								<div className="flex gap-2">
									{[
										"Any Time",
										"Under 15 mins",
										"Under 30 mins",
										"Under 1 hour",
									].map((time, index) => (
										<button
											key={index}
											onClick={() =>
												setSelectedTime(
													index === 0
														? ""
														: index * 15
												)
											}
											className={`px-4 py-2 rounded-lg ${
												selectedTime ===
												(index === 0 ? "" : index * 15)
													? "bg-primary text-background"
													: "bg-primary/10 text-primary hover:bg-primary/20"
											} transition duration-300`}
										>
											{time}
										</button>
									))}
								</div>
							</div>

							<div>
								<p className="text-lg font-semibold mb-2">
									Difficulty
								</p>
								<div className="flex gap-2">
									{[
										"Any Difficulty",
										"Easy",
										"Medium",
										"Hard",
									].map((difficulty) => (
										<button
											key={difficulty}
											onClick={() =>
												setSelectedDifficulty(
													difficulty ===
														"Any Difficulty"
														? ""
														: difficulty
												)
											}
											className={`px-4 py-2 rounded-lg ${
												selectedDifficulty ===
												difficulty
													? "bg-primary text-background"
													: "bg-primary/10 text-primary hover:bg-primary/20"
											} transition duration-300`}
										>
											{difficulty}
										</button>
									))}
								</div>
							</div>
						</div>

						<div className="flex justify-end gap-4">
							<button
								onClick={resetFilters}
								className="border border-primary text-primary py-2 px-4 rounded-lg hover:bg-primary/20 transition duration-300"
							>
								Reset
							</button>
							<button
								onClick={applyFilters}
								className="bg-primary text-background py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300"
							>
								Apply
							</button>
						</div>
					</div>
				</div>
			)}

			<div className="flex flex-wrap justify-start gap-8 mt-4">
				{currentRecipe &&
					currentRecipe.length > 0 &&
					currentRecipe.map((recipe) => (
						<Recipe key={recipe.id} recipe={recipe} />
					))}
			</div>

			<div className="flex justify-center items-center gap-4 mt-8">
				<button
					onClick={() => paginate(currentPage - 1)}
					disabled={currentPage === 1}
					className="p-2 border border-primary rounded-sm hover:bg-primary/20 duration-300"
				>
					<ChevronLeft />
				</button>
				{[...Array(totalPages)].map((_, index) => (
					<button
						key={index}
						onClick={() => paginate(index + 1)}
						className={`px-4 py-2 border border-primary rounded-sm ${
							currentPage === index + 1
								? "bg-primary text-background"
								: " hover:bg-primary/20 duration-300"
						}`}
					>
						{index + 1}
					</button>
				))}
				<button
					onClick={() => paginate(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="p-2 border border-primary rounded-sm"
				>
					<ChevronRight />
				</button>
				<span className="text-lg font-semibold">
					Page {currentPage} of {totalPages}
				</span>
			</div>

			<LetterSearch />
		</div>
	);
};

export default RecipePage;
