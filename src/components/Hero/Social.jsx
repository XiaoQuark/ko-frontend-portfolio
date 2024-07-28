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
			<a href="" className="hero-social-icon" target="_blank">
				<UilGithub />
			</a>
			<a href="" className="hero-social-icon" target="_blank">
				<UilLinkedin />
			</a>
			<a href="" className="hero-social-icon" target="_blank">
				<UilInstagram />
			</a>
		</div>
	);
}
