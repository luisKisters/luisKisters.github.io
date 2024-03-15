import React from "react";

const Hero = () => {
	return (
		<div
			id="Home"
			className="Hero Orbitron flex flex-col bg-black justify-center items-center h-screen"
		>
			<div className="hero-name-wrapper p-16 text-center">
				<h1 className="hero-name-heading1 text-white text-9xl Orbitron font-bold">
					Luis
				</h1>
				<h1 className="hero-name-heading2 text-white text-6xl Orbitron font-bold">
					Kisters
				</h1>
			</div>
			<p className="hero-description text-white text-lg Orbitron px-16 text-center font-bold">
				Hi! I'm Luis Kisters, a 16-year-old boy who loves to code
			</p>
			<button className="text-white font-bold border-white border-2 p-2 Orbitron hover:text-black hover:bg-white transition duration-300">
				Contact me
			</button>
		</div>
	);
};

export default Hero;
