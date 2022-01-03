import React, { useState } from 'react';

const CounterButton = ({ color }) => {
	const [count, setCount] = useState(0);

	const updateCount = () => {
		setCount(c => c + 1);
	};

	return (
		<button color={color} onClick={updateCount}>
			Count: {count}
		</button>
	);
};

export default CounterButton;
