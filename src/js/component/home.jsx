import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	const [cycleRunning, setCycleRunning] = useState();

	let i = 0;

	let lightNames = ["red", "yellow", "green"];

	const cycle = () => {
		clearInterval(cycleRunning);
		const interval = setInterval(function () {
			let result = i % lightNames.length;
			setColor(lightNames[result]);
			i++;
		}, 1000);
		setCycleRunning(interval);
	};

	const onClick = () => {
		cycle();
	};

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
			<h1>Traffic light with React</h1>
			<div className="container">
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
				<div className="row">
					<button onClick={cycle} className="Cycle">
						Cycle
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
