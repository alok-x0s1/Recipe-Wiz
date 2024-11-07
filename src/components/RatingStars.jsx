import React from "react";
import { Star } from "lucide-react";

const RatingStars = ({ rating = 0, size = 24 }) => {
	const normalizedRating = Math.min(Math.max(0, rating), 5);

	const fullStars = Math.floor(normalizedRating);
	const partialStar = normalizedRating % 1;
	const emptyStars = 5 - Math.ceil(normalizedRating);

	return (
		<div className="flex items-center gap-1">
			{[...Array(fullStars)].map((_, i) => (
				<Star
					key={`full-${i}`}
					size={size}
					className="text-yellow-400 fill-yellow-400"
				/>
			))}

			{partialStar > 0 && (
				<div className="relative">
					<Star size={size} className="text-yellow-400" />
					<div
						className="absolute top-0 left-0 overflow-hidden"
						style={{ width: `${partialStar * 100}%` }}
					>
						<Star
							size={size}
							className="text-yellow-400 fill-yellow-400"
						/>
					</div>
				</div>
			)}

			{[...Array(emptyStars)].map((_, i) => (
				<Star
					key={`empty-${i}`}
					size={size}
					className="text-yellow-400"
				/>
			))}

			<span className="ml-2 text-sm">
				{normalizedRating.toFixed(1)}
			</span>
		</div>
	);
};

export default RatingStars;
