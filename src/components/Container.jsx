import { useState } from "react";

import StatsContainer from "./StatsContainer";
import WordInput from "./WordInput";
import { MAX_FB_CHARACTERS, MAX_IG_CHARACTERS } from "../lib/constants";

export default function Container() {
	const [text, setText] = useState("");
	let count = text.length;

	// Create stats object to pass to StatsContainer
	// This allows for easier management of stats and avoids prop drilling
	const stats = {
		count,
		numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
		igCount: MAX_IG_CHARACTERS - count,
		fbCount: MAX_FB_CHARACTERS - count,
	};

	return (
		<main className="container">
			<WordInput text={text} setText={setText} />
			<StatsContainer stats={stats} />
		</main>
	);
}
