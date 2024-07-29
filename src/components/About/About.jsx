import React from "react";
import "./About.css";
import AboutImg from "../../../assets/about/me-web.jpg";
import CV from "../../../assets/about/kris-oldrini-CV.pdf";
import { Info } from "./Info";

export const About = () => {
	return (
		<section className="about section" id="about">
			<h2 className="section-title">About Me</h2>
			<span className="section-subtitle">My Introduction</span>
			<div className="about-container container grid">
				<img src={AboutImg} alt="" className="about-img" />
				<div className="about-data">
					<p className="about-description">
						Frontend Developer with a passion for Arts, Education
						and Sustainability. With a previous career in fashion
						design and production I offer a unique sense of
						creativity and highly professional attitude.
					</p>
					<Info />
					<a download="" href={CV} className="button button-flex">
						Download my CV
					</a>
				</div>
			</div>
		</section>
	);
};
