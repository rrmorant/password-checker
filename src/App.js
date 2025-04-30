import React, { useState } from "react";
import validator from "validator";

const App = () => {
	const [errorMessage, setErrorMessage] = useState("");

	const validate = (value) => {
		if (
			validator.isStrongPassword(value, {
				minLength: 12,
				minLowercase: 2,
				minUppercase: 2,
				minNumbers: 2,
				minSymbols: 2,
			})
		) {
			setErrorMessage("Is Strong Password");
		} else {
			setErrorMessage("Is Not Strong Password");
		}
	};

	return (
		<div
			style={{
				marginLeft: "200px",
			}}>
			<pre>
				<h2>Checking Password Strenght in ReactJS</h2>
				<span>Enter Password: </span>{" "}
				<input type="text" onChange={(e) => validate(e.target.value)}></input>
				<br />
				{errorMessage === "" ? null : (
					<span
						style={{
							fontWeight: "bold",
							color: "red",
						}}>
						{errorMessage}
					</span>
				)}
			</pre>
		</div>
	);
};

export default App;
