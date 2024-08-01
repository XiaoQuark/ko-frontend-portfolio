import React, { useState, useEffect } from "react";
import { Project } from "./Project";
import "./Works.css";
import projectsData from "../../data/projects.json";
import categories from "../../data/categories.json";
import { Modal } from "./Modal";
import { WorkFilters } from "./WorkFilters";

export function Works() {
	const [filter, setFilter] = useState({ name: "all" });
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		if (filter.name === "all") {
			setProjects(projectsData);
		} else {
			const filteredProjects = projectsData.filter((project) => {
				return project.category.some(
					(item) => item.toLocaleLowerCase() === filter.name
				);
			});
			console.log(filteredProjects);
			setProjects(filteredProjects);
		}
	}, [filter]);

	return (
		<section className="works section" id="works">
			<h2 className="section-title">Works</h2>
			<span className="section-subtitle">My most recent projects</span>
			<div>
				<WorkFilters categories={categories} setFilter={setFilter} />
				<div className="works-container container grid">
					{projects.map((project) => {
						return <Project project={project} key={project.id} />;
					})}
				</div>
			</div>
		</section>
	);
}
