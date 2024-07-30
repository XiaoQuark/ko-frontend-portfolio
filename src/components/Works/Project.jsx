import React, { useState } from "react";
import { Modal } from "./Modal";
import { UilArrowRight } from "@iconscout/react-unicons";
// import getImageUrl from "../../utils";

export function Project({ project }) {
	const [modalActive, setModalActive] = useState(false);
	return (
		<div className="project-card" key={project.id}>
			<img
				src="../../../assets/projects/project.png"
				alt=""
				className="project-img"
			/>
			<div className="project-content">
				<h3 className="project-title">{project.title}</h3>
				<p className="project-description">{project.description}</p>
				<p className="project-category">{project.category}</p>
				<span
					className="project-button"
					onClick={() => setModalActive(true)}
				>
					Read More <UilArrowRight className="project-button-icon" />
				</span>
			</div>
			<div className="works-modal">
				<Modal
					project={project}
					modalActive={modalActive}
					setModalActive={setModalActive}
					key={project.id}
				/>
			</div>
		</div>
	);
}
