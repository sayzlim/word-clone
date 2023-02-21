import React from 'react';

import Guess from '../Guess';
import GuessHistory from '../GuessHistory';
import GuessInput from '../GuessInput';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
	const [gameAnswer, setGameAnswer] = React.useState(
		sample(WORDS)
	);
	const [guessHistory, setGuessHistory] = React.useState(
		[]
	);
	const [gameResult, setGameResult] =
		React.useState('Ongoing');
	const [guessCount, setGuessCount] = React.useState(0);
	const [isDisabled, setIsDisabled] = React.useState(false);

	console.info(gameAnswer);

	return (
		<>
			<Guess guessHistory={guessHistory} />
			<GuessInput
				guessHistory={guessHistory}
				setGuessHistory={setGuessHistory}
				gameAnswer={gameAnswer}
				guessCount={guessCount}
				setGuessCount={setGuessCount}
				setGameResult={setGameResult}
				isDisabled={isDisabled}
				setIsDisabled={setIsDisabled}
			/>
			<Banner
				gameResult={gameResult}
				setGameResult={setGameResult}
				guessCount={guessCount}
				gameAnswer={gameAnswer}
				setGameAnswer={setGameAnswer}
				setGuessHistory={setGuessHistory}
				setIsDisabled={setIsDisabled}
				setGuessCount={setGuessCount}
			/>
		</>
	);
}

export default Game;