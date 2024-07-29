import "./App.css";
import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Hero />
				<About />
				<Skills />
			</main>
		</>
	);
}

export default App;
