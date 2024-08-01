import React from "react";
import {
	UilGithub,
	UilLinkedin,
	UilInstagram,
	UilInstagramAlt,
} from "@iconscout/react-unicons";

export function Social() {
	return (
		<div className="hero-social">
			<a
				href="https://github.com/XiaoQuark"
				className="hero-social-icon"
				target="_blank"
			>
				<UilGithub />
			</a>
			<a
				href="https://www.linkedin.com/in/kris-oldrini/"
				className="hero-social-icon"
				target="_blank"
			>
				<UilLinkedin />
			</a>
			<a
				href="https://www.instagram.com/krishneide/"
				className="hero-social-icon"
				target="_blank"
			>
				<UilInstagram />
			</a>
		</div>
	);
}
