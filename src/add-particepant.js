import React, { useEffect } from "react";

const AddParticipant = () => {
	const meetingId = `${process.env.REACT_MEETING_ID}`;
	const participantData = {
		name: "abd3",
		picture: "{{$randomImageUrl}}",
		custom_participant_id: "{{$randomAlphaNumeric}}",
		preset_name: "group_call_host",
	};

	useEffect(() => {
		const addParticipant = async () => {
			try {
				const response = await fetch(
					`https://api.cluster.dyte.in/v2/meetings/${meetingId}/participants`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(participantData),
					}
				);

				if (!response.ok) {
					throw new Error(`Error adding participant: ${response.statusText}`);
				}

				const data = await response.json();
				console.log("Participant added:", data);
			} catch (error) {
				console.error(error);
			}
		};

		addParticipant();
	}, []);

	return <div>google</div>;
};

export default AddParticipant;
