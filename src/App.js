import "./App.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import NewCard from "./newCard";
import { useState } from "react";
import data from "./data";

function App() {
	const [inp, setInp] = useState(false);
	const [searchinp, setSearchinp] = useState("");
	const [items, setItems] = useState(data);
	const [showFilter, setShowFilter] = useState(false);

	const handleClick = () => {
		setInp(!inp);
	};

	function filter() {
		setShowFilter(!showFilter);
	}

	const handleChange = (e) => {
		const searchString = e.target.value.toLowerCase();
		setSearchinp(searchString);
		// setItems(data);
		const newArr = items.filter((ele) => {
			if (searchinp === "") {
				return ele;
			} else {
				return ele.title.toLowerCase().includes(searchinp);
			}
		});
		setItems(newArr);
	};

	return (
		<div className="text-gray-500 bg-gray-50">
			<div className="w-full bg-white flex justify-start p-4 pb-0 border-gray-300 border-b-2">
				<span className=" pr-8">Your</span>
				<span className="border-b-2 border-red-600 pr-8 font-semibold">
					All
				</span>
				<span className="">Blocked</span>
			</div>
			<div className="flex justify-end m-2">
				{inp && (
					<input
						type="text"
						placeholder="search"
						className="px-2"
						onChange={handleChange}
						value={searchinp}
					/>
				)}
				<div
					className="p-2"
					onClick={handleClick}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4 text-gray-400 hover:cursor-pointer">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</div>
				<div
					className="bg-gray-200 rounded-sm w-16 p-2 text-xs hover:cursor-pointer"
					onClick={filter}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4 pr-1 text-gray-500 inline-block">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
						/>
					</svg>
					<span className="inline-block">Filter</span>
				</div>
			</div>
			{showFilter && (
				<div className="flex justify-end">
					<div className="card p-3 w-80">
						<div className="font-bold text-gray-700 border-b">Filters</div>
						<div className="my-3">
							<span>Type</span>
							<div className="pb-4 grid grid-cols-2 border-b">
								<div>
									<input type="checkbox"></input>
									<label> Subscription</label>
								</div>
								<div>
									<input type="checkbox"></input>
									<label> Burner</label>
								</div>
							</div>
						</div>
						<div className="my-4">
							<span className="block">Cardholder</span>
							<select className="bg-gray-100 w-full p-1 rounded text-left">
								<option>Select cardholder</option>
								<option>Visa</option>
								<option>MasterCard</option>
								<option>Rupay</option>
							</select>
						</div>
						<div className="w-full grid grid-cols-2">
							<button className="bg-red-600 text-white text-xs h-7 mr-3 rounded">
								Apply
							</button>
							<button className="bg-gray-100 text-gray-500 text-xs rounded">
								Clear
							</button>
						</div>
					</div>
				</div>
			)}
			<div className="grid grid-cols-3 p-4 m-4">
				{items.map((ele) => {
					return (
						<NewCard
							title={ele.title}
							type={ele.type}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;

// <div className="text-gray-500">
// 	<div className="grid md:grid-cols-3">
// 		<div className="md:cols-span-1 flex justify-end">
// 			<nav className="">
// 				<div>
// 					<h1 className="font-bold uppercase p-4">
// 						<a
// 							className="hover:text-gray-700"
// 							href="/">
// 							Food Ninja
// 						</a>
// 					</h1>
// 					<div className="px-4 cursor-pointer md:hidden">
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							fill="none"
// 							viewBox="0 0 24 24"
// 							strokeWidth={1.5}
// 							stroke="currentColor"
// 							className="w-4 h-4 text-right">
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
// 							/>
// 						</svg>
// 					</div>
// 				</div>
// 				<ul className="text-sm mt-6">
// 					<li className="text-gray-700 font-bold text-right">
// 						<a
// 							href="#"
// 							className="border-r-4 border-primary pr-2">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								fill="none"
// 								viewBox="0 0 24 24"
// 								strokeWidth={1.5}
// 								stroke="currentColor"
// 								className="w-4 h-4 inline-block">
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
// 								/>
// 							</svg>

// 							<span> Home</span>
// 						</a>
// 					</li>
// 					<li className="text-right">
// 						<a
// 							href="#"
// 							className="border-r-4 border-white pr-2">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								fill="none"
// 								viewBox="0 0 24 24"
// 								strokeWidth={1.5}
// 								stroke="currentColor"
// 								className="w-4 h-4 inline-block">
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
// 								/>
// 							</svg>

// 							<span> About </span>
// 						</a>
// 					</li>
// 					<li className="text-right">
// 						<a
// 							href="#"
// 							className="border-r-4 border-white pr-2">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								fill="none"
// 								viewBox="0 0 24 24"
// 								strokeWidth={1.5}
// 								stroke="currentColor"
// 								className="w-4 h-4 inline-block">
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
// 								/>
// 							</svg>

// 							<span> Contact</span>
// 						</a>
// 					</li>
// 				</ul>
// 			</nav>
// 		</div>
// 		<main className="px-16 py-6 bg-gray-100 col-span-2">
// 			<div className="text-red-500 flex justify-end">
// 				<a
// 					className="btn text-primary border-primary md:border-2 m-2 hover:bg-primary hover:text-white"
// 					href="#">
// 					Log in
// 				</a>
// 				<a
// 					className="btn text-primary border-primary md:border-2 m-2 hover:bg-primary hover:text-white"
// 					href="#">
// 					Sign up
// 				</a>
// 			</div>
// 			<header>
// 				<h2 className="text-6xl text-gray-600 py-3">Recipes</h2>
// 				<h3 className="text-xl pb-6 font-semibold text-gray-500 ">
// 					For Ninjas
// 				</h3>
// 			</header>
// 			<div>
// 				<h4 className="text-gray-500 py-2 my-4 font-medium border-b border-gray-200">
// 					Latest Recipes
// 				</h4>
// 				<div className="mb-4 grid ">
// 					<Card />
// 					<Card />
// 					<Card />
// 					<NewCard />
// 				</div>
// 				<div>
// 					<div className="bg-secondary-100 btn flex justify-center inline text-secondary-200 hover:shadow-inner">
// 						Load more
// 					</div>
// 				</div>
// 			</div>
// 		</main>
// 	</div>
// </div>
