import { FC } from "react";
import "./App.css";
import "./styles/root.css";
import "./styles/typography.css";

// components
import { ScrollTriggerStorytelling } from "./projects";

const App: FC = (): JSX.Element => {
	return (
		<div>
			<ScrollTriggerStorytelling />
		</div>
	);
};

export default App;
