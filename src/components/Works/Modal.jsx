import React from "react";
import { UilArrowRight, UilMultiply } from "@iconscout/react-unicons";

export function Modal({ project, modalOpen }) {
	return (
		<div className={`works-modal-content ${project.id}`}>
			<UilMultiply />
			<h3 className="project-modal-title">{project.title}</h3>
			<p className="project-description">{project.presentation}</p>
			<ul className="tech-stack-container container grid">
				{project.techStack.map((tech) => {
					return <li className="tech-stack-content">{tech}</li>;
				})}
			</ul>
			{project.link ? (
				<a href={project.link} className="project-button">
					{project.status}{" "}
					<UilArrowRight className="project-button-icon" />
				</a>
			) : (
				<a></a>
			)}
			{project.repo ? (
				<a href={project.repo} className="project-button">
					Repo <UilArrowRight className="project-button-icon" />
				</a>
			) : (
				<a></a>
			)}
		</div>
	);
}
