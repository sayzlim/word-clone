import React from 'react';

import Guess from '../Guess';
import GuessHistory from '../GuessHistory';
import GuessInput from '../GuessInput';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessHistory, setGuessHistory] = React.useState([]);
	const [gameResult, setGameResult] = React.useState('Ongoing');
	const [guessCount, setGuessCount] = React.useState(0);

	return (
		<>
			<Guess guessHistory={guessHistory} setGuessHistory={setGuessHistory} />
			<GuessInput
				guessHistory={guessHistory}
				setGuessHistory={setGuessHistory}
				answer = {answer}
				guessCount = {guessCount}
				setGuessCount = {setGuessCount}
				gameResult = {gameResult}
				setGameResult = {setGameResult}
			/>
			<Banner gameResult={gameResult} guessCount={guessCount} answer={answer} />
		</>
	);
}

export default Game;