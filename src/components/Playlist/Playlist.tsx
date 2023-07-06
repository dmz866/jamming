import { useState } from "react";
import { IPlaylist } from "../../interfaces/iplaylist";
import { ITrack } from "../../interfaces/itrack";
import { Tracklist } from "../Tracklist/Tracklist";

type TProps = {
	tracks: ITrack[]
};

export const Playlist = ({ tracks }: TProps) => {
	const [playlist, setPlaylist] = useState<IPlaylist>({} as IPlaylist);

	return (
		<div className="flex">
			<input name='title' type="text" value={playlist.title} />
			<Tracklist tracks={tracks} />
		</div>);
};