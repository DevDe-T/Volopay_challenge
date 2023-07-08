import React from "react";
import "./App.css";

const Card = () => {
	return (
		<>
			<div className="card hover:shadow-lg">
				<img
					className="w-full h-32 object-cover"
					src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
					alt=""
				/>
				<div className="m-4">
					<span className="font-medium">5 Bean Chilli Stew</span>
					<span className="block text-sm text-gray-500">Recipe by Mario</span>
				</div>
				<div className="badge">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 inline-block">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>

					<span>25 MIN</span>
				</div>
			</div>
		</>
	);
};

export default Card;
