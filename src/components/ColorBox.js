import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

export default class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			copied: false,
		};
	}

	changeCopyState = () => {
		this.setState({ copied: true }, () => {
			setTimeout(() => {
				this.setState({ copied: false });
			}, 1500);
		});
	};

	render() {
		const { color, name } = this.props;
		return (
			<CopyToClipboard text={color} onCopy={this.changeCopyState}>
				<div className="ColorBox" style={{ background: color }}>
					<div
						className={`ColorBox-overlay ${this.state.copied && "show"}`}
						style={{ background: color }}
					></div>
					<div className={`copy-msg  ${this.state.copied && "show"} `}>
						<h1>COPIED!</h1>
						<p>{color}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span>{name}</span>
						</div>
						<button className="copy-button">Copy</button>
					</div>
					<span className="see-more">More</span>
				</div>
			</CopyToClipboard>
		);
	}
}
