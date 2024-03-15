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
				alignItems: "center",
				justifyContent: "center",
				transition: "opacity 0.1s ease", // Adjusted the transition duration
				opacity: isChanging ? 0 : 1, // Change opacity smoothly when content is changing
			}}
		>
			{currentDescription === "" ? (
				<p className="text-6xl text-center">Hover Button to learn</p>
			) : (
				<h1>Your Content: {currentDescription}</h1>
			)}
		</div>
	);
};

export default DescriptionPanel;
