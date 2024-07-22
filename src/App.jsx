import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	return (
		<div className={styles.App}>
			<header>
				<Navbar />
			</header>
			<main>
				<Hero />
				<About />
			</main>
		</div>
	);
}

export default App;
