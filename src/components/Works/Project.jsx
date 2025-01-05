import { useState } from "react";
import { Modal } from "./Modal";
import { UilArrowRight } from "@iconscout/react-unicons";
import { getImageUrl } from "../../utils.js";
import PropTypes from 'prop-types';


export function Project({ project }) {
	const [modalActive, setModalActive] = useState(false);
	console.log(getImageUrl);
	return (
		<div className="project-card" key={project.id}>
			<img
				src={getImageUrl(project.coverImg)}
				alt={project.title}
				className="project-img"
			/>
			<div className="project-content">
				<h3 className="project-title">{project.title}</h3>
				<p className="project-description">{project.description}</p>
				<div className="project-category-list">
					{project.category.map((item, index) => {
						return (
							<p key={index} className="project-category">
								{item}
							</p>
						);
					})}
			</div>

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

Project.PropTypes = {
	project: PropTypes.object
}