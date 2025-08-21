import { useState } from "react";

export default function StatsContainer({ stats }) {
	// const handleCountChange = (event) => {
	// 	const count = event.target.value.length;
	// 	console.log(count);
	// };

	// let wordCount = count.includes(" ") ? count.split(" ").length : 1;

	return (
		<section className="stats">
			<Stat label="Words" number={stats.numberOfWords} />
			<Stat label="Characters" number={stats.count} />
			<Stat label="Instagram" number={stats.igCount} />
			<Stat label="Facebook" number={stats.fbCount} />
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
