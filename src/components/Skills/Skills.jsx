import React from "react";
import "./Skills.css";
import { Frontend } from "./Frontend";
import { UX } from "./UX";

export function Skills() {
	return (
		<section className="skills section" id="skills">
			<h2 className="section-title">Skills</h2>
			<span className="section-subtitle">My Technical Level</span>
			<div className="skills-container container grid">
				<Frontend />
				<UX />
			</div>
		</section>
	);
}
