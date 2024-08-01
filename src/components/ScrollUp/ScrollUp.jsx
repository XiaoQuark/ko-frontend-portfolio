import React from "react";
import { UilArrowUp } from "@iconscout/react-unicons";
import "./ScrollUp.css";

export function ScrollUp() {
	window.addEventListener("scroll", function () {
		const header = document.querySelector(".header");
		if (this.scrollY >= 80) header.classList.add("scroll-header");
		else header.classList.remove("scroll-header");
	});
	return (
		<a href="#home" className="scrollup">
			<UilArrowUp className="scrollup-icon" />
		</a>
	);
}
