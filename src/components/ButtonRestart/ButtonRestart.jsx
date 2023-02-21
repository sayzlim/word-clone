import React from 'react';
import { WORDS } from '../../data';
import { sample } from '../../utils';

function ButtonRestart({
	setGameResult,
	gameAnswer,
	resetGame
}) {

	return (
		<>
			<button onClick={() => resetGame()}>
				Restart Game
			</button>
		</>
	);
}

export default ButtonRestart;