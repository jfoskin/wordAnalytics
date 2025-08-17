import { useState } from "react";

export default function WordInput() {
	const [text, setText] = useState("");

	const handleChange = (event) => {
		let newText = event.target.value;
		if (newText.includes("<script>")) {
			alert("Scripting Tags not allowed");
			newText = newText.replace("<script>", "");
		}
		setText(newText);
	};

	return (
		<textarea
			value={text}
			placeholder="Enter your words"
			id="wordInput"
			className="textarea"
			onChange={handleChange}
		/>
	);
}
