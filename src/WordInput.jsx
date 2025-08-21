import { useState } from "react";
import Warning from "./Warning";

export default function WordInput({ text, setText }) {
	// const [text, setText] = useState("");
	const [warningText, setWarningText] = useState("");

	//setup dynamic rendering

	const handleChange = (event) => {
		let text = event.target.value;

		//basic validation

		if (text.includes("<script>")) {
			setWarningText("No scripting tags allowed");
			text = text.replace("<script>", "");

			//regex example (/a/.test(text)) of how the below line can be written
		} else if (text.includes("@", " ")) {
			setWarningText("No @ symbols allowed");
			text = text.replace("@", " ");
		} else {
			setWarningText("");
		}
		setText(text);
	};

	return (
		<>
			<textarea
				value={text}
				placeholder="Enter your words"
				id="wordInput"
				className="textarea"
				onChange={handleChange}
			/>
			<Warning warningText={warningText} />
		</>
	);
}
