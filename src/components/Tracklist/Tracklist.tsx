import { ITrack } from "../../interfaces/itrack";
import { Track } from "../Track/Track";

type TProps = {
	tracks: ITrack[]
};

export const Tracklist = ({ tracks }: TProps) => {
	return (
		<>
			{tracks?.map((track) => <Track key={track.id} track={track} />)}
		</>
	);
};