import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

export default class Palette extends Component {
	render() {
		const colorBoxes = this.props.colors.map((color) => {
			return <ColorBox {...color} key={color.name} />;
		});
		return (
			<div className="Palette">
				<div className="Palette-color">{colorBoxes}</div>
			</div>
		);
	}
}
