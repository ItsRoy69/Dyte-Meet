
import { useEffect, useState } from "react";
import { DyteProvider, useDyteClient } from "@dytesdk/react-web-core";
import { DyteMeeting } from "@dytesdk/react-ui-kit";

export default function App() {
	const [dyteMeeting, initMeeting] = useDyteClient();
	const [showMeeting, setShowMeeting] = useState(false);

	const handleButtonClick = () => {
		setShowMeeting(true);
	};

	useEffect(() => {
		initMeeting({
			authToken: `${process.env.REACT_AUTH_KEY}`,
			defaults: {
				audio: false,
				video: false,
			},
		});
	}, []);

	return (
		<DyteProvider value={dyteMeeting}>
			<div>
				<button onClick={handleButtonClick}>Start Meeting</button>
				{showMeeting && (
					<div style={{ height: "40vh", width: "100vw" }}>
						<DyteMeeting meeting={dyteMeeting} mode="fill" />
					</div>
				)}
			</div>
		</DyteProvider>
	);
}
