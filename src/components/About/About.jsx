import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";

export const About = () => {
	return (
		<section className={styles.container} id="about">
			<h2 className={styles.title}>About Me</h2>
			<div className={styles.content}>
				<img
					src={getImageUrl("about/aboutImage.png")}
					alt="Me sitting with a laptop"
					className={styles.aboutImg}
				/>
				<ul className={styles.aboutItems}>
					<li className={styles.aboutItem}>
						<img
							src={getImageUrl("about/cursorIcon.png")}
							alt="Cursor icon"
						/>
						<div className={styles.aboutItemText}>
							<h3>Frontend Developer</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Quam delectus necessitatibus
								dolorum ducimus laboriosam voluptatem.
							</p>
						</div>
					</li>
					<li className={styles.aboutItem}>
						<img
							src={getImageUrl("about/uiIcon.png")}
							alt="UI icon"
						/>
						<div className={styles.aboutItemText}>
							<h3>UX/UI Designer</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Quam delectus necessitatibus
								dolorum ducimus laboriosam voluptatem.
							</p>
						</div>
					</li>
					<li className={styles.aboutItem}>
						<img
							src={getImageUrl("about/serverIcon.png")}
							alt="Server icon"
						/>
						<div className={styles.aboutItemText}>
							<h3>Game Developer</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Quam delectus necessitatibus
								dolorum ducimus laboriosam voluptatem.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};
