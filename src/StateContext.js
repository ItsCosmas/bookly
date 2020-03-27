import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

export const StateContext = React.createContext();

export function StateProvider({ children }) {
	let intialState = {
		book_list: [],
		heading: ''
	};

	const [state, setState] = useState(intialState);

	const history = useHistory();

	React.useEffect(() => {
		if (state && state.book_list && state.book_list.length > 0) {
			history.push('/');
		}
	}, [state, history]);

	return (
		<StateContext.Provider value={[state, setState]}>
			{children}
		</StateContext.Provider>
	);
}
