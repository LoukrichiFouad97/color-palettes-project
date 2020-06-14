import React from "react";
import Palette from "./components/Palette";
import seedColors from "./components/seedColors";
import { generatePalette } from "./components/ColorHelpers";

function App() {
	console.log(generatePalette(seedColors[4]));
	return (
		<div className="App">
			<Palette {...seedColors[1]} />
		</div>
	);
}

export default App;
