import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const myCss = {
	root: {
    backgroundColor: "white",
    border: '1px solid black',
		borderRadius: "5px",
		padding: "0.5rem",
		position: "relative",
		overflow: "hidden",
		"&:hover": {
			cursor: "pointer",
		},
	},
	colors: {
		backgroundColor: "#dae1e4",
		// display: "flex",
		// flexWrap: "wrap",
		height: "150px",
		width: "100%",
		borderRadius: "5px",
		overflow: "hidden",
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
	miniColor: {
		width: "20%",
		height: "25%",
		display: "inline-block",
		margin: "0 auto",
		position: "relative",
		marginBottom: "-3.5px",
	},
};

function MiniPalette(props) {
	const { classes, paletteName, emoji, colors } = props;
	const miniColors = colors.map((clr) => (
		<div
			className={classes.miniColor}
			style={{ backgroundColor: clr.color }}
			key={clr.name}
		></div>
	));
	return (
		<div className={classes.root}>
			<div className={classes.colors}>{miniColors}</div>
			<h5 className={classes.title}>
				{paletteName}
				<span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(myCss)(MiniPalette);
