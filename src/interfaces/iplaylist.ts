import { ITrack } from "./itrack";

export interface IPlaylist {
	id: string;
	title: string;
	tracks: ITrack[];
}