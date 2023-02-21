import React from 'react';
import ButtonRestart from '../ButtonRestart';

function Banner({
	gameResult,
	setGameResult,
	guessCount,
	gameAnswer,
	setGameAnswer,
	setGuessHistory,
	setIsDisabled,
	setGuessCount
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
					setGameResult={setGameResult}
					setGameAnswer={setGameAnswer}
					setGuessHistory={setGuessHistory}
					setIsDisabled = {setIsDisabled}
					setGuessCount = {setGuessCount}
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
					setGameResult={setGameResult}
					setGameAnswer={setGameAnswer}
					setGuessHistory={setGuessHistory}
					setIsDisabled = {setIsDisabled}
					setGuessCount = {setGuessCount}
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