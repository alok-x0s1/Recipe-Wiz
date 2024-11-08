import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
	return (
		<div className="min-h-screen py-12">
			<section>
				<h1 className="text-4xl font-bold text-primary mb-6">
					About RecipeWiz
				</h1>
				<div className="text-lg text-primary/80 mb-12">
					<p>
						Welcome to{" "}
						<span className="font-semibold">RecipeWiz</span>, your
						ultimate destination for discovering new, exciting
						recipes! Whether you're an experienced chef or a home
						cook, RecipeWiz offers a wide range of recipes to
						inspire your next meal.
					</p>
				</div>
			</section>

			<section className="px-4 max-w-6xl sm:px-6 lg:px-8 py-12 rounded-lg shadow-md mb-12 border border-gray-600">
				<h2 className="text-3xl font-semibold text-primary mb-4">
					Our Mission
				</h2>
				<div className="text-lg text-primary/80 ">
					<p className="mb-4">
						At RecipeWiz, our mission is simple: to bring people
						together through the love of cooking. We believe food
						has the power to create connections, inspire creativity,
						and nourish both body and soul. That's why we’ve built
						an app that’s easy to use, visually stunning, and full
						of fresh ideas to help you cook delicious meals at home.
					</p>
					<p className="mb-4">
						Whether you’re looking for quick weeknight dinners,
						healthy options, or indulgent treats, RecipeWiz provides
						recipes from all over the world, ensuring that you
						always have something new to try.
					</p>
				</div>
			</section>

			<section className="my-12">
				<h2 className="text-3xl font-semibold text-primary mb-8 text-center">
					Key Features of RecipeWiz
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold text-primary mb-2">
							Easy-to-Follow Recipes
						</h3>
						<p className="text-primary/80">
							Every recipe is broken down into simple steps,
							making it easy for you to follow along. Whether
							you're a beginner or expert, we ensure clarity in
							each step.
						</p>
					</div>
					<div className=" p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold text-primary mb-2">
							Personalized Recommendations
						</h3>
						<p className="text-primary/80">
							Based on your preferences and dietary needs, we
							suggest recipes tailored just for you. Discover new
							favorites based on what you love to cook!
						</p>
					</div>
					<div className="p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold text-primary mb-2">
							Meal Planning
						</h3>
						<p className="text-primary/80">
							Plan your meals for the week with ease. RecipeWiz
							allows you to organize and schedule your recipes
							ahead of time.
						</p>
					</div>
				</div>
			</section>

			<section>
				<h2 className="text-3xl font-semibold text-center text-primary mb-8">
					Meet the Team
				</h2>
				<div className="flex justify-center gap-16">
					<div className="flex flex-col items-center text-center">
						<img
							src="https://randomuser.me/api/portraits/men/42.jpg"
							alt="Team Member"
							className="rounded-full w-32 h-32 mb-4"
						/>
						<h3 className="font-semibold text-xl text-primary mb-2">
							John Doe
						</h3>
						<p className="text-gray-600">Lead Developer</p>
					</div>
					<div className="flex flex-col items-center text-center">
						<img
							src="https://randomuser.me/api/portraits/women/8.jpg"
							alt="Team Member"
							className="rounded-full w-32 h-32 mb-4"
						/>
						<h3 className="font-semibold text-xl text-primary mb-2">
							Jane Smith
						</h3>
						<p className="text-gray-600">UX/UI Designer</p>
					</div>
					<div className="flex flex-col items-center text-center">
						<img
							src="https://randomuser.me/api/portraits/men/41.jpg"
							alt="Team Member"
							className="rounded-full w-32 h-32 mb-4"
						/>
						<h3 className="font-semibold text-xl text-primary mb-2">
							Alex Brown
						</h3>
						<p className="text-gray-600">Product Manager</p>
					</div>
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h2 className="text-3xl font-semibold text-center text-primary mb-6">
					Get in Touch
				</h2>
				<p className="text-center text-lg text-gray-700 mb-6">
					Have questions or feedback? We'd love to hear from you!
					Reach out to us anytime.
				</p>
				<div className="text-center">
					<Link
						to="/contact"
						className="text-lg bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/80"
					>
						Contact Us
					</Link>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
