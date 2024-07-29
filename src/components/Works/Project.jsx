import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
// import getImageUrl from "../../utils";

export function Project({ project, setModalOpen }) {
	return (
		<div className="project-content" key={project.id}>
			<h3 className="project-title">{project.title}</h3>
			<img
				src="../../../assets/projects/project.png"
				alt=""
				className="project-img"
			/>
			<p className="project-modal-description">{project.description}</p>
			<p className="project-category">{project.category}</p>
			<span className="project-button">
				Read More <UilArrowRight className="project-button-icon" />
			</span>
		</div>
	);
}
