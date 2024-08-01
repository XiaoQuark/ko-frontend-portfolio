import "./App.css";
import { About } from "./components/About/About";
import { Contacts } from "./components/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";
import { Works } from "./components/Works/Works";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Hero />
				<About />
				<Skills />
				<Works />
				<Contacts />
				<Footer />
			</main>
		</>
	);
}

export default App;
