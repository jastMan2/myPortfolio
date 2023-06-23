import React from "react";

import logo from "../images/logo.svg";
import Image from "./Image";
import "./Header.css"

const Header = () => {
	return (
		<header className="header wrapper">
			<div className="logo"><Image image={logo}/></div>
			<nav className="header_navbar">
				<ul className="navbar">
					<li>projects</li>
					<li>about me</li>
					<li>contacts</li>
				</ul>
			</nav>
		</header>
	)
};

export default Header;