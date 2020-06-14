import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import seedColors from "./components/seedColors";
import { generatePalette } from "./components/ColorHelpers";

class App extends Component {
	findPalette = (id) => {
		return seedColors.find((palette) => {
			return palette.id === id;
		});
	};

	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" render={() => <h1>Hello home</h1>} />
					<Route
						exact
						path="/palette/:id"
						render={(routeProps) => (
							<Palette
								palette={generatePalette(
									this.findPalette(routeProps.match.params.id)
								)}
							/>
						)}
					/>
				</Switch>
				{/* <Palette palette={generatePalette(seedColors[5])} /> */}
			</div>
		);
	}
}

export default App;
