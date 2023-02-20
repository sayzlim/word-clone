import React from 'react';
import { range } from '../../utils.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function Guess({ guessHistory, setGuessHistory }) {
	const numOfGuessesAllowed = range(
		0,
		NUM_OF_GUESSES_ALLOWED
	);

	console.info(guessHistory);

	const nextGuess = guessHistory.slice(
		Math.max(guessHistory.length - 5, 0)
	);

	console.info(nextGuess);

	function BlankCell() {
		return (
			<>
				<span className="cell"></span>
				<span className="cell"></span>
				<span className="cell"></span>
				<span className="cell"></span>
				<span className="cell"></span>
			</>
		);
	}

	function FilledCell({ guess }) {
		console.log(guess);
		const guessArray = guess.split('');

		return (
			<>
				{guessArray.map((char) => {
					const id = crypto.randomUUID();
					return (
						<span key={id} className="cell">
							{char}
						</span>
					);
				})}
			</>
		);
	}

	return (
		<>
			{numOfGuessesAllowed.map((num, index) => {
				const isBlank = guessHistory[index] === undefined;
				console.log(isBlank);
				const id = crypto.randomUUID();
				return (
					<p key={id} className="guess">
						{isBlank && <BlankCell />}
						{!isBlank && (
							<FilledCell
								guess={guessHistory[index].guess}
							/>
						)}
						{}
					</p>
				);
			})}
		</>
	);
}

export default Guess;