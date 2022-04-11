import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	function clickRed() {
		setColor("red");
	}
	function clickYellow() {
		setColor("yellow");
	}
	function clickGreen() {
		setColor("green");
	}

	return (
		<div>
			<div className="container">
				<h1>Traffic light with React</h1>
				<button
					className={
						"rounded-circle red " +
						(color === "red" ? "selected  blink" : "")
					} //Curly braces are to inform react that we are going to add some expression to the Class
					onClick={clickRed}></button>
				<button
					className={
						"rounded-circle yellow " +
						(color === "yellow" ? "selected blink" : "")
					}
					onClick={clickYellow}></button>
				<button
					className={
						"rounded-circle green " +
						(color === "green" ? "selected blink" : "")
					}
					onClick={clickGreen}></button>
			</div>
		</div>
	);
};

export default Home;
