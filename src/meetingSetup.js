import React from "react";
import { useMeetingSetup } from "./useToken";
export default function MeetingButton() {
	const { dyteMeeting } = useMeetingSetup();

	const startMeeting = () => {
		if (dyteMeeting) {
			dyteMeeting.join();
		}
	};

	return (
		<button type="button" onClick={startMeeting}>
			Start Meeting
		</button>
	);
}
