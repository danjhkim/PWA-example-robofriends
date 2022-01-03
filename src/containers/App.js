import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';

import { setSearchField, requestRobots } from '../actions';

const App = () => {
	const dispatch = useDispatch();
	const searchField = useSelector(state => state.searchField.searchField);
	const robots = useSelector(state => state.robots.robots);
	var controller = new AbortController();
	var signal = controller.signal;

	signal.addEventListener('abort', function () {
		console.log('Request aborted');
	});

	useEffect(() => {
		dispatch(requestRobots());
	}, [dispatch]);

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

	const onSearchChange = event => {
		dispatch(setSearchField(event.target.value));
	};

	return !robots.length ? (
		<h1>Loading</h1>
	) : (
		<div className='tc'>
			<Header />

			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundary>
					<CardList robots={filteredRobots} />
				</ErrorBoundary>
			</Scroll>
		</div>
	);
};

export default App;
