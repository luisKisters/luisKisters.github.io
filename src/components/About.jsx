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
		// <div id="about" className="bg-black min-h-screen flex flex-col items-center justify-center text-center Orbitron">
		//     <h1 className="text-white text-5xl font-bold mb-4 md:mb-6">About Me</h1>
		//     <p className="about-description text-white text-lg">
		//         Hi there! 👋 I'm Luis, a passionate learner and developer. I'm amazed by new technology and the world of programming.
		//     </p>
		//     <div className="flex space-x-8 mt-4 md:mt-6">
		//         <a href="https://github.com/luisKisters" target="_blank" rel="noopener noreferrer">
		//             <AiFillGithub className="text-white text-2xl md:text-3xl hover:text-blue-500 transition" />
		//         </a>
		//         <a href="https://linkedin.com/in/luis-kisters-484650271/" target="_blank" rel="noopener noreferrer">
		//             <AiFillLinkedin className="text-white text-2xl md:text-3xl hover:text-blue-500 transition" />
		//         </a>
		//         <a href="mailto:luis.w.kisters@gmail.com">
		//             <AiFillMail className="text-white text-2xl md:text-3xl hover:text-blue-500 transition" />
		//         </a>
		//     </div>
		//     <p className="text-white text-base md:text-lg mt-4 md:mt-6">
		//         📍 Location: Berlin, Germany
		//         <br />
		//         🧰 Working at <a href="https://www.muli.tech/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">MuliTech</a>
		//     </p>
		// </div>
		<div
			// className="flex flex-col justify-center items-center h-screen"
			className="about-con"
			id="about"
		>
			{/* <div className="w-80"></div> */}
			{/* <Card /> */}
			<div className="card-con Orbitron text-white border">
				<p className="text-4xl text-center px-10 pt-10 pb-5">Menu</p>
				{/* <p className="card-profil-desc px-10 py-5">
				I'm Luis Kisters, a passionate advocate for positive change. From my
				roots in student leadership at FWSK to my current role at WaldorfSV,
				I've been on a journey to make a difference. With a blend of resilience
				honed through diverse experiences and a knack for collaboration, I'm
				dedicated to shaping education policy and fostering meaningful impact.
				Let's connect and create change together!
			</p> */}
				<p className="px-5">Hover a button to learn more</p>
				<div className="card-btns pt-5 px-5">
					<button
						className="mb-5 text-white font-bold min-w-full border-white border-2 p-2 text-xs Orbitron hover:text-black hover:bg-white transition duration-300"
						onMouseEnter={() => handleHover("about")}
						onMouseLeave={() => setDescription("")} // Clear description on mouse leave
					>
						About Me
					</button>
					<button
						className="mb-5 text-white font-bold min-w-full border-white border-2 p-2 text-xs Orbitron hover:text-black hover:bg-white transition duration-300"
						onMouseEnter={() => handleHover("experience")}
						onMouseLeave={() => setDescription("")} // Clear description on mouse leave
					>
						Experience
					</button>
					<button
						className="mb-5 text-white font-bold min-w-full border-white border-2 p-2 text-xs Orbitron hover:text-black hover:bg-white transition duration-300"
						onMouseEnter={() => handleHover("cv")}
						onMouseLeave={() => setDescription("")} // Clear description on mouse leave
					>
						Download CV
					</button>
				</div>
			</div>

			<DescriptionPanel description={description} />
			{/* <p>test</p> */}
			{/* <DescriptionPanel /> */}
		</div>
	);
};

export default About;
