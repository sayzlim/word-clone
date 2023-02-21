import React from 'react';
import { WORDS } from '../../data';
import { sample } from '../../utils';

function ButtonRestart({gameAnswer, setGameAnswer}) {
	function resetGame() {
		const nextGameAnswer = sample(WORDS);
		setGameAnswer(nextGameAnswer);
	}

	return (
		<>
			<button onClick={() => resetGame()}>Restart Game</button>
		</>
	);
}

export default ButtonRestart;