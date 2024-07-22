import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Hi, I'm Kris</h1>
				<p className={styles.description}>
					I'm a Frontend and Game Developer
				</p>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Cum, minus.
				</p>
				<a
					className={styles.contactBtn}
					href="mailto:kris.oldrini@gmail.com"
				>
					Contact Me
				</a>
			</div>
			<img
				src={getImageUrl("hero/heroImage.png")}
				alt="Hero image of me"
				className={styles.heroImg}
			/>
		</section>
	);
};
