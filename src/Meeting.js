import { useEffect } from "react";
import { DyteProvider, useDyteClient } from "@dytesdk/react-web-core";
import { DyteMeeting } from "@dytesdk/react-ui-kit";

function Meeting() {
	const [dyteMeeting, initMeeting] = useDyteClient();

	useEffect(() => {
		initMeeting({
			authToken:`${process.env.REACT_AUTH_KEY}`,
			defaults: {
				audio: false,
				video: false,
			},
		});
	}, []);

	const handleStartMeeting = () => {
		initMeeting({
			authToken:`${process.env.REACT_AUTH_KEY}`,
			defaults: {
				audio: false,
				video: false,
			},
		});
	};

	return (
		<DyteProvider value={dyteMeeting}>
			<div style={{ height: "40vh", width: "100vw" }}>
				<DyteMeeting meeting={dyteMeeting} mode="fill" />
			</div>
			<button onClick={handleStartMeeting}>Start Meeting</button>
		</DyteProvider>
	);
}

export default Meeting;
