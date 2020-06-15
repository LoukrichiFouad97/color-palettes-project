import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "./MiniPalette";

const styles = {
	root: {
		backgroundColor: "blue",
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	container: {
		width: "50%", 
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
	},
	nav: {
		backgoundColor: "blue",
		width: "100%",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "space-between",
		color: "white",
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "5%",
	},
};

class PaletteList extends Component {
	render() {
		const { palettes, classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Color</h1>
					</nav>
					<div className={classes.palettes}>
						{palettes.map((palette) => (
							<p key={palette.id}>
								<MiniPalette {...palette} />
							</p>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
