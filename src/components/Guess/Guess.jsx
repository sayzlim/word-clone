import React from 'react';
import { range } from '../../utils.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function Guess({ guessHistory, setGuessHistory }) {
	const numOfGuessesAllowed = range(
		0,
		NUM_OF_GUESSES_ALLOWED
	);

	console.log("Guess History");
	console.info(guessHistory);

	const nextGuess = guessHistory.slice(
		Math.max(guessHistory.length - 5, 0)
	);

	console.log("Next Guess History");
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

	function FilledCell({guess}) {
		console.log("Guess Object: ");
		console.info(guess);

		return (
			<>
				{guess.map(({ letter, status }) => {
					const id = crypto.randomUUID();
					const letterStatus = `cell ${status}`;
					return (
						<span key={id} className={letterStatus}>
							{letter}
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
				console.info(isBlank);
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