import { ITrack } from "../../interfaces/itrack";

type TProps = {
	track: ITrack
};

export const Track = ({ track: { name, album, artist, id } }: TProps) => {
	return (
		<div className="flex">
			<p>{name}</p>
			<p>{album}</p>
			<p>{artist}</p>
		</div>
	);
};