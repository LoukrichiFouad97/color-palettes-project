import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

class ColorBox extends Component {
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
		const { background, name } = this.props;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div className="ColorBox" style={{ background: background }}>
					<div
						className={`ColorBox-overlay ${this.state.copied && "show"}`}
						style={{ background: background }}
					></div>
					<div className={`copy-msg  ${this.state.copied && "show"} `}>
						<h1>COPIED!</h1>
						<p>{background}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span>{name}</span>
						</div>
						<button className="copy-button">Copy</button>
					</div>
					<Link to="/" onClick={(e) => e.stopPropagation}>
						<span className="see-more" onClick={this.props.goHome}>
							More
						</span>
					</Link>
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
