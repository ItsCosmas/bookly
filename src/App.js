import React from 'react';

import Nav from './components/Nav/Nav';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import Books from './containers/Books';
import About from './components/About/About';
import Book from './containers/Book';
import Error404 from './components/Error404/Error404';

import { StateProvider } from './StateContext';

function App() {
	return (
		<Router>
			<StateProvider>
				<div className='app'>
					<Nav />
					<main>
						<Switch>
							<Route exact path='/' component={Books} />
							<Route exact path='/book/:id' component={Book} />
							<Route exact path='/about' component={About} />
							<Route exact path='/404' component={Error404} />
							<Redirect from='*' to='/404' />
						</Switch>
					</main>
				</div>
			</StateProvider>
		</Router>
	);
}

export default App;
