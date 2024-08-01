import React from "react";
import {
	UilGithub,
	UilLinkedin,
	UilInstagram,
	UilInstagramAlt,
} from "@iconscout/react-unicons";
import "./Footer.css";

export function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container container">
				<h1 className="footer-title">Kris Oldrini</h1>
				<ul className="footer-list">
					<li>
						<a href="#about" className="footer-link">
							About
						</a>
					</li>
					<li>
						<a href="#skills" className="footer-link">
							Skills
						</a>
					</li>
					<li>
						<a href="works" className="footer-link">
							Works
						</a>
					</li>
				</ul>
				<div className="footer-social">
					<a
						href="https://github.com/XiaoQuark"
						className="footer-social-link"
						target="_blank"
					>
						<UilGithub
							size="1.25rem"
							color="var(--container-colour)"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/kris-oldrini/"
						className="footer-social-link"
						target="_blank"
					>
						<UilLinkedin
							size="1.25rem"
							color="var(--container-colour)"
						/>
					</a>
					<a
						href="https://www.instagram.com/krishneide/"
						className="footer-social-link"
						target="_blank"
					>
						<UilInstagram
							size="1.25rem"
							color="var(--container-colour)"
						/>
					</a>
				</div>
			</div>
			<div>
				<span className="footer-copy">
					&#169; Kris Oldrini. All Rights reserved
				</span>
			</div>
		</footer>
	);
}
