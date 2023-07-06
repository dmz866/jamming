import { ITrack } from "../../interfaces/itrack";

type TProps = {
	track: ITrack
};

export const Track = ({ track: { name, album, artist, id } }: TProps) => {
	return (
		<>
			<label>{name}</label>
			<label>{album}</label>
			<label>{artist}</label>
		</>
	);
};