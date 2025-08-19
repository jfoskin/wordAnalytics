export default function StatsContainer() {
	return (
		<section className="stats">
			<Stat label="Words" number={0} />
			<Stat label="Characters" number={0} />
			<Stat label="Instagram" number={280} />
			<Stat label="Facebook" number={2200} />
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
