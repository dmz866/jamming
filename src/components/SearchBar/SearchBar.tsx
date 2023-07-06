import { useState } from "react";

type TProps = {
	onSearch: (search: string) => void
};

export const SearchBar = ({ onSearch }: TProps) => {
	const [search, setSearch] = useState('');
	const onChangeHandler = (e: any) => setSearch(e.target.value);
	const onClick = () => {
		if (search) {
			onSearch(search);
		}
	};

	return (
		<>
			<input name='search' onChange={onChangeHandler} />
			<button type='button' onClick={onClick}>Search</button>
		</>
	);
};