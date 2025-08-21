import { useState } from "react";

import StatsContainer from "./StatsContainer";
import WordInput from "./WordInput";

export default function Container() {
	const [text, setText] = useState("");
	let numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
	let count = text.length;
	// const [warningText, setWarningText] = useState("");

	// //setup dynamic rendering
	// const count = text.length;

	// const handleChange = (event) => {
	// 	let text = event.target.value;
	// 	console.log(text.length);

	// 	//basic validation

	// 	if (text.includes("<script>")) {
	// 		setWarningText("No scripting tags allowed");
	// 		text = text.replace("<script>", "");

	// 		//regex example (/a/.test(text)) of how the below line can be written
	// 	} else if (text.includes("@", " ")) {
	// 		setWarningText("No @ symbols allowed");
	// 		text = text.replace("@", " ");
	// 	} else {
	// 		setWarningText("");
	// 	}
	// 	setText(text);
	// };

	return (
		<main className="container">
			<WordInput text={text} setText={setText} />
			<StatsContainer count={count} numberOfWords={numberOfWords} />
		</main>
	);
}
