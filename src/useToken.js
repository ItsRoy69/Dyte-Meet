import { useEffect } from "react";
import { useDyteClient } from "@dytesdk/react-web-core";

export function useMeetingSetup() {
	const [dyteMeeting, initMeeting] = useDyteClient();

	useEffect(() => {
		initMeeting({
			authToken:`${process.env.REACT_AUTH_TOKEN}`,
			defaults: {
				audio: false,
				video: false,
			},
		});
	}, []);

	return dyteMeeting;
}
