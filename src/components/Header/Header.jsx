import React, { useState } from "react";
import "./Header.css";
import { UilBars, UilMultiply } from "@iconscout/react-unicons";

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header className="header">
			<nav className="nav container">
				<a href="index.html" className="nav-logo">
					Kris Oldrini
				</a>
				<div className={menuOpen ? "nav-menu menu-open" : "nav-menu"}>
					<ul className="nav-list grid">
						<li className="nav item">
							<a href="#home" className="nav-link active-link">
								Home
							</a>
						</li>
						<li className="nav item">
							<a href="#about" className="nav-link">
								About
							</a>
						</li>
						<li className="nav item">
							<a href="#skills" className="nav-link">
								Skills
							</a>
						</li>
						<li className="nav item">
							<a href="#works" className="nav-link">
								Works
							</a>
						</li>
						<li className="nav item">
							<a href="#contacts" className="nav-link">
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
