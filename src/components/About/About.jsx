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
						I’m Kris, a software developer with a strong passion for
						creativity, education, and sustainability. My journey
						began in fashion design and production, where I
						developed an artistic eye and a keen attention to
						detail. Growing up in Italy, surrounded by art and
						creativity, I was naturally drawn to design, but my
						curiosity and love for problem-solving eventually led me
						to software development.
					</p>
					<p className="about-description">
						Moving to London over a decade ago opened new horizons
						for me, both personally and professionally. The city’s
						diverse and fast-paced environment inspired me to merge
						my artistic background with technology. I believe in the
						power of technology as a tool for positive change,
						whether through creating inclusive video games or
						developing solutions that prioritize education and
						sustainability.
					</p>
					<p className="about-description">
						As a true Pisces, I bring intuition, empathy, and
						creativity to everything I do. I’m constantly inspired
						by nature—especially dinosaurs and birds—world languages
						and cultures, and of course, digital innovation. My goal
						is to continue learning and growing, using my unique
						perspective to create meaningful and engaging digital
						experiences that leave a lasting impact.
					</p>
					{/* <Info /> */}
					<a download="" href={CV} className="button button-flex">
						Download my CV
					</a>
				</div>
			</div>
		</section>
	);
};
