import React from "react";
import "./Hero.css";
import { Social } from "./Social";
import { Data } from "./Data";
import { ScrollDown } from "./ScrollDown";

export function Hero() {
	return (
		<section className="hero section" id="home">
			<div className="hero-container container grid">
				<div className="hero-content grid">
					<Social />
					<div className="hero-img"></div>
					<Data />
				</div>
				<ScrollDown />
			</div>
			{/* <img src="" alt="Hero image of me" className="" /> */}
		</section>
	);
}
