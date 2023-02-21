import React from 'react';
import { checkGuess } from '../../game-helpers.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function GuessInput({
	guessHistory,
	setGuessHistory,
	gameAnswer,
	guessCount,
	setGuessCount,
	setGameResult,
	isDisabled,
	setIsDisabled
}) {
	const [input, setInput] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();
		const nextInput = input.toUpperCase();

		if (nextInput.length < 5) {
			alert('Please enter minimum 5 characters');
		} else {
			// Store the input result into the history array
			const guessResult = checkGuess(nextInput, gameAnswer);
			const nextGuessHistory = [
				...guessHistory,
				{
					guess: guessResult,
					id: crypto.randomUUID(),
				},
			];
			setGuessHistory(nextGuessHistory);

			// Reduce the number of guess with each sucessful submit
			const nextGuessCount = guessCount + 1;
			setGuessCount(nextGuessCount);

			// Check game result
			const isGuessCorrect =
				!!!nextInput.localeCompare(gameAnswer);

			if (
				nextGuessCount <= NUM_OF_GUESSES_ALLOWED &&
				isGuessCorrect
			) {
				setGameResult('Win');
				const nextIsDisabled = true;
				setIsDisabled(nextIsDisabled);
			} else if (nextGuessCount >= NUM_OF_GUESSES_ALLOWED) {
				setGameResult('Lose');
				const nextIsDisabled = true;
				setIsDisabled(nextIsDisabled);
			}

			// Reset the input query
			setInput('');
		}
	}

	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(event) => handleSubmit(event)}
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				maxLength="5"
				value={input}
				autoFocus
				disabled={isDisabled}
				onChange={(event) => setInput(event.target.value)}
			/>
		</form>
	);
}

export default GuessInput;