import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Hero />
			</main>
		</>
	);
}

export default App;
