import { React, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import DescriptionPanel from "./DescriptionPanel";
import "../css/About.css";

const About = () => {
	const [description, setDescription] = useState("");

	const handleHover = (desc) => {
		setDescription(desc); // Update description state on hover
	};

	return (
		<div className="about-con" id="about">
			<div className="card-con Orbitron flex flex-col justify-between text-white border">
				<div className="card-top">
					<p className="text-4xl text-center px-10 pt-10 pb-5">Menu</p>
					<p className="px-5">Hover a button to learn more</p>
					{/* <p>{description}</p> */}
					<div className="card-btns pt-5 px-5">
						<button
							className="mb-5 text-white font-bold min-w-full border-white border-2 p-2 text-xs Orbitron hover:text-black hover:bg-white transition duration-300"
							// onMouseEnter={() => handleHover("about")}
							// onMouseLeave={() => setDescription("")} // Clear description on mouse leave
							onClick={() => handleHover("about")}
						>
							About Me
						</button>
						<button
							className="mb-5 text-white font-bold min-w-full border-white border-2 p-2 text-xs Orbitron hover:text-black hover:bg-white transition duration-300"
							// onMouseEnter={() => handleHover("experience")}
							// onMouseLeave={() => setDescription("")} // Clear description on mouse leave
							onClick={() => handleHover("experience")}
						>
							Experience
						</button>
						{/* <button // make it so that if the description is set to "about" the background is white using tailwindcss
							className="mb-5 text-white font-bold min-w-full border-white border-2 p-2 text-xs Orbitron hover:text-black hover:bg-white transition duration-300"
							// onMouseEnter={() => handleHover("cv")}
							// onMouseLeave={() => setDescription("")} // Clear description on mouse leave
							onClick={() => handleHover("cv")}
						>
							Download CV
						</button> */}
						<button
							className={`mb-5 text-white font-bold min-w-full border-white border-2 p-2 text-xs Orbitron hover:text-black hover:bg-white transition duration-300 ${
								description === "cv" ? "bg-white text-black" : ""
							}`}
							onClick={() => handleHover("cv")}
						>
							Download CV
						</button>
					</div>
				</div>
				<div className="card-bottom socials flex justify-center pb-3">
					{/* TODO  make fancier hover animation */}
					{/* Add this line */}
					{/* Social icons */}
					<a
						href="https://github.com/luisKisters"
						target="_blank"
						rel="noopener noreferrer"
						className="p-1"
					>
						<AiFillGithub className="text-white text-2xl md:text-3xl hover:text-gray-500 transition" />
					</a>
					<a
						href="https://linkedin.com/in/luis-kisters-484650271/"
						target="_blank"
						rel="noopener noreferrer"
						className="p-1"
					>
						<AiFillLinkedin className="text-white text-2xl md:text-3xl hover:text-gray-500 transition" />
					</a>
					<a href="mailto:luis.w.kisters@gmail.com" className="p-1">
						<AiFillMail className="text-white text-2xl md:text-3xl hover:text-gray-500 transition" />
					</a>
				</div>
			</div>
			<DescriptionPanel description={description} />
		</div>
	);
};

export default About;
