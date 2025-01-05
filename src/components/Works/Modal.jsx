import { UilArrowRight, UilMultiply } from "@iconscout/react-unicons";
import PropTypes from 'prop-types';


export function Modal({ project, modalActive, setModalActive }) {
	return (
		<div
			className={
				modalActive ? "project-modal active-modal" : "project-modal"
			}
		>
			<div className="project-modal-content">
				<UilMultiply
					className="project-modal-close"
					onClick={() => setModalActive(false)}
				/>
				<h3 className="project-modal-title">{project.title}</h3>
				<p className="project-description">{project.presentation}</p>
				<ul className="tech-stack-container container grid">
					{project.techStack.map((tech) => {
						return <li className="tech-stack-item">{tech}</li>;
					})}
				</ul>
				{project.links ? (
					<a href={project.links.url} className="project-button">
						{project.links.type}{" "}
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
		</div>
	);
}
