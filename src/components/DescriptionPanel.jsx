import React, { useState, useEffect } from "react";
import "../css/About.css";

const DescriptionPanel = ({ description }) => {
	const [currentDescription, setCurrentDescription] = useState("");
	const [isChanging, setIsChanging] = useState(false);

	useEffect(() => {
		if (description !== currentDescription) {
			setIsChanging(true);
			setTimeout(() => {
				setCurrentDescription(description);
				setIsChanging(false);
			}, 300); // Adjusted the timeout duration for a faster transition
		}
	}, [description, currentDescription]);

	return (
		<div
			className={`Orbitron descriptionPanel-con text-white border p-10`}
			style={{
				display: "flex",
				// alignItems: "center",
				// justifyContent: "center",
				transition: "opacity 0.1s ease", // Adjusted the transition duration
				opacity: isChanging ? 0 : 1, // Change opacity smoothly when content is changing
			}}
		>
			{currentDescription === "" ? (
				<p className="text-6xl text-center self-center">
					Hover Button to learn more
				</p>
			) : currentDescription === "cv" ? (
				<>
					<p className="text-4xl self-center pb-5">Download CV</p>
					<iframe
						src="https://drive.google.com/file/d/1TUQOeGgB9l1AA-9qDEKZ7-Xh4Wwx54cq/preview"
						width="auto"
						height="480"
						allow="autoplay"
					></iframe>
					<button
						className={`font-bold min-w-full border-white border-2 p-2 mt-5 text-xs Orbitron hover:text-black hover:bg-white transition duration-300 ${
							description === "about" ? "bg-white text-black" : ""
						}`}
						onClick={() =>
							window.open(
								"https://drive.usercontent.google.com/download?id=1TUQOeGgB9l1AA-9qDEKZ7-Xh4Wwx54cq&export=download"
							)
						}
					>
						Download
					</button>
				</>
			) : // <p className="text-6xl text-center self-center">CV</p>
			currentDescription === "about" ? (
				<>
					<p className="text-4xl self-center">About</p>
					{/* <div className="overflow-x-auto whitespace-normal max-w-screen-lg mx-auto p-4 border border-gray-300 rounded-lg scrollbar"> */}
					<div className="overflow-x-auto whitespace-normal max-w-screen-lg mx-auto scrollbar">
						<p className="text-sm">Hey, I'm Luis Kisters.</p>
					</div>
				</>
			) : (
				<h1>Your Content: {currentDescription}</h1>
			)}
		</div>
	);
};

export default DescriptionPanel;
