import { Github } from "lucide-react";
import React from "react";

const ContactPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
			<h1 className="text-3xl font-bold mb-4">Get in Touch with Us</h1>
			<p className="text-lg text-gray-700 mb-6">
				We’d love to hear from you! For more details, visit our GitHub
				profile.
			</p>
			<a
				href="https://github.com/alok-x0s1"
				target="_blank"
				rel="noopener noreferrer"
				className="text-lg bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/80 flex gap-2 items-center"
			>
				<Github /> GitHub
			</a>
		</div>
	);
};

export default ContactPage;
