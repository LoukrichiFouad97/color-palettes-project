import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import seedColors from "./components/seedColors";
import { generatePalette } from "./components/ColorHelpers";
import PaletteList from "./components/PaletteList";

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
					<Route
						exact
						path="/"
						render={(routeProps) => (
							<PaletteList palettes={seedColors} {...routeProps} />
						)}
					/>
					<exact
						path="/palette/:id"
						render={(routeProps) => (
							<Palette
								palette={generatePalette(
									this.findPalette(routeProps.match.params.id)
								)}
							/>
						)}
					/>
					<Route
						exact
						path="/:paletteId/:colorId"
						render={() => <h1>color page</h1>}
					/>
				</Switch>
				{/* <Palette palette={generatePalette(seedColors[5])} /> */}
			</div>
		);
	}
}

export default App;
