import { useState } from 'react';
import './App.css';
import { Tracklist } from './components/Tracklist/Tracklist';
import { ITrack } from './interfaces/itrack';

const tracks: ITrack[] = [{ name: 'name 1', album: 'album 1', artist: 'artist 1', id: '1' },
{ name: 'name 2', album: 'album 2', artist: 'artist 2', id: '2' }];

function App() {
	const [search, setSearch] = useState('');

	return (
		<div className="App">
			<Tracklist tracks={tracks} />
		</div>
	);
}

export default App;
