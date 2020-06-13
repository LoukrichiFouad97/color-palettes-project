import React from "react";
import Palette from "./components/Palette";
import seedColors from "./components/seedColors";

function App() {
	return (
		<div className="App">
			<Palette {...seedColors[1]} />
		</div>
	);
}

export default App;
