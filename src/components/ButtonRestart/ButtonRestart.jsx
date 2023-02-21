import React from 'react';
import { WORDS } from '../../data';
import { sample } from '../../utils';

function ButtonRestart({
	setGameResult,
	gameAnswer,
	setGameAnswer,
	setGuessHistory,
	setIsDisabled,
	setGuessCount
}) {
	function resetGame() {
		const nextGuessHistory = [];
		setGuessHistory(nextGuessHistory);

		const nextGameResult = 'Ongoing';
		setGameResult(nextGameResult);

		const nextGameAnswer = sample(WORDS);
		setGameAnswer(nextGameAnswer);

		setGuessCount(0);
		setIsDisabled(false);
	}

	return (
		<>
			<button onClick={() => resetGame()}>
				Restart Game
			</button>
		</>
	);
}

export default ButtonRestart;