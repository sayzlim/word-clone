import React from 'react';

function GuessHistory({ guessHistory, setGuessHistory }) {
	console.log(guessHistory);
	return (
		<div className="guess-results">
			{guessHistory.map(({ guess, id}) => {
				return (
					<p key={id} className="guess">
						{guess}
					</p>
				);
			})}
		</div>
	);
}

export default GuessHistory;