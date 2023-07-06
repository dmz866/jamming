import { ITrack } from "../../interfaces/itrack";
import { Track } from "../Track/Track";

type TProps = {
	tracks: ITrack[]
};

export const Tracklist = ({ tracks }: TProps) => {
	return (
		<div className="flex">
			{tracks?.map((track) => <Track key={track.id} track={track} />)}
		</div>
	);
};