import StatsContainer from "./StatsContainer";
import WordInput from "./WordInput";

export default function Container() {
	return (
		<main className="container">
			<WordInput />
			<StatsContainer />
		</main>
	);
}
