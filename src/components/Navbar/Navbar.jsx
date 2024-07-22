import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.js";

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className={styles.navbar}>
			<div>
				<img src="" alt="" />
				<a className={styles.title} href="/">
					Portfolio
				</a>
			</div>
			<div
				className={`${styles.overlay} ${menuOpen && styles.menuOpen}`}
				onClick={() => setMenuOpen(false)}
			>
				<ul className={styles.menu}>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#experience">Experience</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contacts">Contacts</a>
					</li>
				</ul>
			</div>
			<img
				className={styles.menuBtn}
				src={
					menuOpen
						? getImageUrl("nav/closeIcon.png")
						: getImageUrl("nav/menuIcon.png")
				}
				alt="menu-button"
				onClick={() => setMenuOpen(!menuOpen)}
			/>
		</nav>
	);
};
