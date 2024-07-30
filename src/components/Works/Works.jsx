import React, { useState } from "react";
import { Project } from "./Project";
import "./Works.css";
import projects from "../../data/projects.json";
import categories from "../../data/categories.json";
import { Modal } from "./Modal";

export function Works() {
	// const [modalActive, setModalActive] = useState(false);
	const [projectFilter, setProjectFilter] = useState("all");

	return (
		<section className="works section" id="works">
			<h2 className="section-title">Portfolio</h2>
			<span className="section-subtitle">My most recent projects</span>
			<ul className="works-filters">
				{categories.map((item, index) => {
					return (
						<li className="category" key={index}>
							{item.name}
						</li>
					);
				})}
			</ul>
			<div className="works-container container grid">
				{projects.map((project) => {
					return <Project project={project} key={project.id} />;
				})}
			</div>
			{/* <div className="works-modal">
				{projects.map((project) => {
					return (
						<Modal
							project={project}
							modalActive={modalActive}
							setModalActive={setModalActive}
							key={project.id}
						/>
					);
				})}
			</div> */}
		</section>
	);
}
