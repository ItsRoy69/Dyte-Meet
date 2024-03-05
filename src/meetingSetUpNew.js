import { DyteProvider } from "@dytesdk/react-web-core";
import { DyteMeeting } from "@dytesdk/react-ui-kit";
import { useMeetingSetup } from "./useToken";

export default function App() {
	const dyteMeeting = useMeetingSetup();

	return (
		<DyteProvider value={dyteMeeting}>
			<div style={{ height: "40vh", width: "100vw" }}>
				<DyteMeeting meeting={dyteMeeting} mode="fill" />
			</div>
		</DyteProvider>
	);
}
