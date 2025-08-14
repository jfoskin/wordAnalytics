export default function WordInput() {
	return (
		<div>
			<label htmlFor="wordInput">Enter your words:</label>
			<textarea
				type="text"
				placeholder="Enter your words"
				id="wordInput"
				className="textarea"
			/>
		</div>
	);
}
