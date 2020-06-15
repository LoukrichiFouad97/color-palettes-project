import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

export default class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: "hex" };
	}

	changeLevel = (level) => {
		this.setState({ level });
		console.log(level);
	};

	changeFormat = (e) => {
		this.setState({ format: e });
	};

	render() {
		const { colors, emoji, paletteName } = this.props.palette;
		const { level } = this.state;
		const colorBoxes = colors[level].map((color) => {
			return (
				<ColorBox
					background={color[this.state.format]}
					name={color.name}
					key={color.id}
					goHome={this.goHome}
				/>
			);
		});

		return (
			<div className="Palette">
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
				/>
				<div className="Palette-color">{colorBoxes}</div>
				<footer className="Palette-footer">
					{paletteName}
					<span className="emoji">{emoji}</span>
				</footer>
			</div>
		);
	}
}
