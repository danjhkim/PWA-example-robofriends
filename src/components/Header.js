import React from 'react';
import CounterButton from './CounterButton';

const Header = () => {
	console.log('Header');
	return (
		<div>
			<h1 className='f1'>RoboFriends</h1>
			<CounterButton color={'red'} />
		</div>
	);
};

//use memo can be used to prevent rendering for optimizing
//since header rerenders along with every search key entered
export default React.memo(Header);
