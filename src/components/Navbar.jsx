import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex justify-between py-4 items-center border-b border-gray-800 sticky z-50 top-0 left-0 bg-background">
			<h1 className="text-4xl font-bold">
				<Link to="/">RecipeWiz</Link>
			</h1>
			<div className="flex gap-8 items-center">
				{/* <input
					type="text"
					placeholder="Search recipes"
					className="border border-gray-300 rounded-md px-4 py-2 focus:border-gray-500 focus:outline-none"
				/> */}
				<Link
					to="/"
					className="text-lg font-medium hover:text-black/60 duration-300"
				>
					Home
				</Link>
				<Link
					to="/about"
					className="text-lg font-medium hover:text-black/60 duration-300"
				>
					About
				</Link>
				<Link
					to="/contact"
					className="text-lg font-medium hover:text-black/60 duration-300"
				>
					Contact
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
