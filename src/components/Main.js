import React from "react";

import MainScreen from "./main_components/MainScreen";
import AboutMe from "./main_components/AboutMe";
import MyStack from "./main_components/MyStack";
import Services from "./main_components/services/Services";

const Main = () => {
	return(
		<>
			<MainScreen />
			<AboutMe />
			<MyStack />
			<Services />
		</>
	)
};

export default Main;