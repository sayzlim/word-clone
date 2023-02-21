import React from 'react';

function Banner({ gameResult, guessCount, answer }) {
	const WinMessage = function () {
		return (
			<div className="happy banner">
				<p>
					<strong>Congratulations!</strong> Got it in{' '}
					<strong>
						{guessCount} guesses. {gameResult}
					</strong>
					.
				</p>
			</div>
		);
	};

	const LoseMessage = function () {
		return (
			<div className="sad banner">
				<p>
					Sorry, the correct answer is{' '}
					<strong>{answer}</strong>.
				</p>
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