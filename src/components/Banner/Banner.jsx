import React from 'react';
import ButtonRestart from '../ButtonRestart';

function Banner({
	gameResult,
	setGameResult,
	guessCount,
	gameAnswer,
	resetGame
}) {
	const WinMessage = function () {
		return (
			<div className="flow happy banner">
				<p>
					<strong>Congratulations!</strong> Got it in{' '}
					<strong>{guessCount} guesses.</strong>
				</p>
				<ButtonRestart
					gameAnswer={gameAnswer}
					resetGame={resetGame}
				/>
			</div>
		);
	};

	const LoseMessage = function () {
		return (
			<div className="flow sad banner">
				<p>
					Sorry, the correct answer is{' '}
					<strong>{gameAnswer}</strong>.
				</p>
				<ButtonRestart
					gameAnswer={gameAnswer}
					resetGame={resetGame}
				/>
			</div>
		);
	};

	const EndMessage = function () {
		if (gameResult === 'Win') {
			return WinMessage();
		} else if (gameResult === 'Lose') {
			return LoseMessage();
		} else return <></>;
	};

	return <EndMessage />;
}

export default Banner;