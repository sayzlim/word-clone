import React from 'react';

function GuessHistory({ guessHistory, setGuessHistory }) {
	return (
		<div className="guess-results">
			{guessHistory.map(({ guess, id }) => {
				let joinedGuess = '';

				guess.map(({ letter }) => {
					joinedGuess = [...joinedGuess, letter];
				});

				joinedGuess = joinedGuess.join('');
				return (
					<p key={id} className="guess">
						{joinedGuess}
					</p>
				);
			})}
		</div>
	);
}

export default GuessHistory;