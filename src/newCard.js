import React from "react";

const NewCard = ({ title, type }) => {
	return (
		<div className="text-gray-400 card p-4 w-80">
			<div className="grid grid-cols-3">
				<div className="col-span-2">
					<span className="block font-bold text-black text-xl">{title}</span>
					<span>Memberative </span>
					<span className="relative bottom-1">.</span>
					<span> Budget</span>
				</div>
				<div className="col-span-1 flex items-center relative left-6">
					{type === "subscription" ? (
						<div className="bg-red-300 flex items-center justify-center w-8 h-8 rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-4 h-4 text-red-500">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
								/>
							</svg>
						</div>
					) : (
						<div className="bg-yellow-100 flex items-center justify-center w-9 h-9 rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5 text-yellow-500">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
								/>
							</svg>
						</div>
					)}
				</div>
			</div>
			<div className="grid grid-cols-3 text-xs mt-2">
				<div>
					<span className="text-gray-400 block">Amount</span>
					<span className="text-gray-700">300 SGD</span>
				</div>
				<div>
					<span className="text-gray-400 block">Frequency</span>
					<span className="text-gray-700">Monthly</span>
				</div>
				<div>
					<span className="text-gray-400 block">Expiry</span>
					<span className="text-gray-700">21 July 2021</span>
				</div>
			</div>
			<div className="mt-2">
				<div className="w-full h-2 bg-red-700 rounded "></div>
				<div className="w-56 h-2 relative bottom-2 bg-green-700 rounded "></div>
			</div>
			<div className="grid grid-cols-2 text-xs mt-2">
				<div>
					<div className="pb-2">
						<div className="w-2 h-2 bg-green-700 rounded-full inline-block mr-2"></div>
						<span className="text-gray-400">Spent</span>
					</div>
					<div>
						<div className="w-2 h-2 bg-red-700 rounded-full inline-block mr-2"></div>
						<span className="text-gray-400 ">Balance</span>
					</div>
				</div>
				<div>
					<span className="text-gray-700 pb-2 block text-right">7890 SGD</span>
					<span className="text-gray-700 block text-right">7890 SGD</span>
				</div>
			</div>
		</div>
	);
};

export default NewCard;
