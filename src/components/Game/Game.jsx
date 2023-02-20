import React from 'react';

import Guess from '../Guess';
import GuessHistory from '../GuessHistory';
import GuessInput from '../GuessInput';


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
			<Guess guessHistory={guessHistory} setGuessHistory={setGuessHistory} />
			<GuessHistory
				guessHistory={guessHistory}
				setGuessHistory={setGuessHistory}
			/>
			<GuessInput
				guessHistory={guessHistory}
				setGuessHistory={setGuessHistory}
				answer = {answer}
			/>
		</>
	);
}

export default Game;