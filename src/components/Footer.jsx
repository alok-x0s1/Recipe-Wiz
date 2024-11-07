import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="mt-12 pt-8 border-t border-gray-800">
			<div className="flex justify-between items-center px-6">
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl font-bold">RecipeWiz</h2>
					<p className="text-lg">
						Bringing the joy of cooking to your fingertips. Find,
						cook, and enjoy your favorite meals.
					</p>
				</div>
				<div className="flex gap-8">
					<div className="flex flex-col items-center">
						<h3 className="text-xl font-semibold">Quick Links</h3>
						<Link
							to="/"
							className="text-lg text-primary hover:text-primary/80 duration-300"
						>
							Home
						</Link>
						<Link
							to="/recipes"
							className="text-lg text-primary hover:text-primary/80 duration-300"
						>
							Recipes
						</Link>
						<Link
							to="/about"
							className="text-lg text-primary hover:text-primary/80 duration-300"
						>
							About
						</Link>
					</div>
					<div className="flex flex-col items-center">
						<h3 className="text-xl font-semibold">Follow Us</h3>
						<a
							href="https://facebook.com"
							className="text-lg text-primary hover:text-primary/80 duration-300"
						>
							Facebook
						</a>
						<a
							href="https://instagram.com"
							className="text-lg text-primary hover:text-primary/80 duration-300"
						>
							Instagram
						</a>
						<a
							href="https://twitter.com"
							className="text-lg text-primary hover:text-primary/80 duration-300"
						>
							Twitter
						</a>
					</div>
				</div>
			</div>
			<div className="text-center py-4 mt-8">
				<p className="text-lg">
					&copy; {new Date().getFullYear()} RecipeWiz. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
