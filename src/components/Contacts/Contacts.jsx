import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { UilArrowRight } from "@iconscout/react-unicons";
import "./Contacts.css";

export function Contacts() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_p68nyps", "template_lt39ey9", form.current, {
				publicKey: "YoRYUiKa30VPW9KEW",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					e.target.reset();
					Swal.fire({
						title: "SUCCESS!",
						text: "Your message was sent successfully!",
						icon: "success",
					});
				},
				(error) => {
					console.log("FAILED...", error.text);
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Something went wrong! Try again.",
					});
				}
			);
	};

	// const [result, setResult] = React.useState("");

	// const onSubmit = async (event) => {
	// 	event.preventDefault();
	// 	setResult("Sending....");
	// 	const formData = new FormData(event.target);

	// 	formData.append("access_key", "07216096-d0ae-41bb-851a-3f743768b76e");

	// 	const response = await fetch("https://api.web3forms.com/submit", {
	// 		method: "POST",
	// 		body: formData,
	// 	});

	// 	const data = await response.json();

	// 	if (data.success) {
	// 		setResult("Form Submitted Successfully");
	// 		event.target.reset();
	// 	} else {
	// 		console.log("Error", data);
	// 		setResult(data.message);
	// 	}
	// };

	return (
		<section className="contacts section" id="contacts">
			<h2 className="section-title">Contacts</h2>
			<span className="section-subtitle">Get in Touch</span>
			<div className="contact-container container grid">
				<div className="contact-content">
					<h3 className="contact-title">Ways to contact me</h3>

					<div className="contact-info">
						<div className="contact-card">
							<i class="bx bx-mail-send contact-card-icon"></i>
							<h4 className="contact-card-title">Email</h4>
							<span className="contact-card-data">
								kris.oldrini@gmail.com
							</span>
							<a
								href="mailto:kris.oldrini@gmail.com"
								className="contact-button"
							>
								Send
								<UilArrowRight className="contact-button-icon" />
							</a>
						</div>
						<div className="contact-card">
							<i class="bx bxl-whatsapp contact-card-icon"></i>
							<h4 className="contact-card-title">WhatsApp</h4>
							<span className="contact-card-data">
								+44 (0) 7514760946
							</span>
							<a
								href="https://api.whatsapp.com/send?prone"
								className="contact-button"
							>
								Send
								<UilArrowRight className="contact-button-icon" />
							</a>
						</div>
					</div>
				</div>

				<div className="contact-content">
					<h3 className="contact-title">Share your thoughts</h3>
					<form
						ref={form}
						onSubmit={sendEmail}
						className="contact-form"
					>
						<div className="contact-form-div">
							<label htmlFor="" className="contact-form-tag">
								Name
							</label>
							<input
								type="text"
								name="name"
								className="contact-form-input"
								placeholder="Jessica Fletcher"
								required
							/>
						</div>
						<div className="contact-form-div">
							<label htmlFor="" className="contact-form-tag">
								Email
							</label>
							<input
								type="email"
								name="email"
								pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
								className="contact-form-input"
								placeholder="mrsfletcher@email.com"
								required
							/>
						</div>
						<div className="contact-form-div contact-form-area">
							<label htmlFor="" className="contact-form-tag">
								Message
							</label>
							<textarea
								name="message"
								cols="30"
								rows="10"
								className="contact-form-input"
								placeholder="Hi, ..."
								required
							></textarea>
						</div>
						<button className="button button-flex">
							Send Message!
							<svg
								className="button-icon"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M18.8951 3.61502C19.7248 3.37794 20.492 4.1451 20.2549 4.97489L16.2553 18.9736C15.8267 20.4736 13.823 20.7554 12.9973 19.4317L10.1999 14.947C9.87715 14.4296 9.44039 13.9928 8.92298 13.6701L4.43823 10.8726C3.11455 10.047 3.39632 8.04323 4.89636 7.61465L18.8951 3.61502Z"
									stroke="var(--container-colour)"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M10.1924 13.6777L13.7279 10.1422"
									stroke="var(--container-colour)"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
