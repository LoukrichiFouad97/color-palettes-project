import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const myCss = {
	root: {
		backgroundColor: "white",
		borderRadius: "5px",
		padding: "5px",
		position: "relative",
		overflow: "hidden",
		"&:hover": {
			cursor: "pointer",
		},
	},
	color: {
		backgroundColor: "grey",
	},
	title: {
		dispplay: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: "0.5rem",
		fontSize: "1rem",
		position: "relative",
	},
	emoji: {
		marginLeft: "0.5rem",
		fontSize: "1.5rem",
	},
};

function MiniPalette(props) {
	const { classes, paletteName, emoji } = props;
	return (
		<div className={classes.root}>
			<div className={classes.colors}>mini palette</div>
			<h5 className={classes.title}>
				{paletteName}
				<span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(myCss)(MiniPalette);
