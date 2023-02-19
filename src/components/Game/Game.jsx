import React from 'react';

import GuessInput from '../GuessInput';
import GuessHistory from '../GuessHistory';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessHistory, setGuessHistory] = React.useState(
		[]
	);

	return (
		<>
			<GuessHistory
				guessHistory={guessHistory}
				setGuessHistory={setGuessHistory}
			/>
			<GuessInput
				guessHistory={guessHistory}
				setGuessHistory={setGuessHistory}
			/>
		</>
	);
}

export default Game;