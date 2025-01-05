import React, { useState } from "react";
import "./Header.css";
import { UilBars, UilMultiply } from "@iconscout/react-unicons";

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeNav, setActiveNav] = useState("#home");

	window.addEventListener("scroll", function () {
		const scrollUp = document.querySelector(".scrollup");
		if (this.scrollY >= 500) scrollUp.classList.add("show-scroll");
		else scrollUp.classList.remove("show-scroll");
	});

	return (
		<header className="header">
			<nav className="nav container">
				<a href="index.html" className="nav-logo">
					Kris Oldrini
				</a>
				<div className={menuOpen ? "nav-menu menu-open" : "nav-menu"}>
					<ul className="nav-list grid">
						<li className="nav item">
							<a
								href="#home"
								onClick={() => setActiveNav("#home")}
								className={
									activeNav === "#home"
										? "nav-link active-link"
										: "nav-link"
								}
							>
								Home
							</a>
						</li>
						<li className="nav item">
							<a
								href="#about"
								onClick={() => setActiveNav("#about")}
								className={
									activeNav === "#about"
										? "nav-link active-link"
										: "nav-link"
								}
							>
								About
							</a>
						</li>
						{/* <li className="nav item">
							<a
								href="#skills"
								onClick={() => setActiveNav("#skills")}
								className={
									activeNav === "#skills"
										? "nav-link active-link"
										: "nav-link"
								}
							>
								Skills
							</a>
						</li> */}
						<li className="nav item">
							<a
								href="#works"
								onClick={() => setActiveNav("#works")}
								className={
									activeNav === "#works"
										? "nav-link active-link"
										: "nav-link"
								}
							>
								Works
							</a>
						</li>
						<li className="nav item">
							<a
								href="#contacts"
								onClick={() => setActiveNav("#contacts")}
								className={
									activeNav === "#contacts"
										? "nav-link active-link"
										: "nav-link"
								}
							>
								Contacts
							</a>
						</li>
					</ul>
					{/* <UilMultiply
						className="nav-close"
						onClick={() => setMenuOpen(!menuOpen)}
					/> */}
				</div>
				<div
					className="nav-toggle"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen === true ? <UilMultiply /> : <UilBars />}
				</div>
			</nav>
		</header>
	);
}
