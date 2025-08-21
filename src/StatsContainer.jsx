import { useState } from "react";

export default function StatsContainer({ count, numberOfWords }) {
	// const handleCountChange = (event) => {
	// 	const count = event.target.value.length;
	// 	console.log(count);
	// };

	let igCount = 280 - count;
	let fbCount = 2200 - count;
	// let wordCount = count.includes(" ") ? count.split(" ").length : 1;

	return (
		<section className="stats">
			<Stat label="Words" number={numberOfWords} />
			<Stat label="Characters" number={count} />
			<Stat label="Instagram" number={igCount} />
			<Stat label="Facebook" number={fbCount} />
		</section>
	);
}

// const wordCounter = ({ text }) => {
// 	let wordsFromInput = text.split(" ");

// };
function Stat({ label, number }) {
	return (
		<>
			<section className="stat">
				<span className="stat__number">{number}</span>
				<h2 className="second-heading">{label} </h2>
			</section>
		</>
	);
}
