import { useState } from "react";

import StatsContainer from "./StatsContainer";
import WordInput from "./WordInput";

export default function Container() {
	const [text, setText] = useState("");
	let count = text.length;
	let numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
	let igCount = 280 - count;
	let fbCount = 2200 - count;

	// Create stats object to pass to StatsContainer
	// This allows for easier management of stats and avoids prop drilling
	const stats = { count, numberOfWords, igCount, fbCount };

	return (
		<main className="container">
			<WordInput text={text} setText={setText} />
			<StatsContainer stats={stats} />
		</main>
	);
}
