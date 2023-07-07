import { useState } from 'react';
import './App.css';
import { Playlist } from './components/Playlist/Playlist';
import { SearchBar } from './components/SearchBar/SearchBar';
import { SearchResults } from './components/SearchResults/SearchResults';
import { ITrack } from './interfaces/itrack';

const tracks: ITrack[] = [{ name: 'name 1', album: 'album 1', artist: 'artist 1', id: '1' },
{ name: 'name 2', album: 'album 2', artist: 'artist 2', id: '2' }];

function App() {
	const [results, setResults] = useState<ITrack[]>([]);
	const [tracksSelected, setTracksSelected] = useState<ITrack[]>([]);
	// comentario test
	const onSearchHandle = (value: string) => {
		if (value) {
			const data = tracks.filter(t => t.name.includes(value));
			setResults(data);
		}
	};

	return (
		<div className="App">
			<div className='flex'>
				<SearchBar onSearch={onSearchHandle} />
				<SearchResults tracks={results} />
			</div>
			<div>
				{results?.length > 0 && <Playlist tracks={tracksSelected} />}
			</div>
		</div>
	);
}

export default App;
