import React from 'react';
import { checkGuess } from '../../game-helpers.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function GuessInput({
	guessHistory,
	setGuessHistory,
	answer,
	guessCount,
	setGuessCount,
	gameResult,
	setGameResult
}) {
	const [input, setInput] = React.useState('Guess');

	function handleSubmit(event) {
		event.preventDefault();
		const nextInput = input.toUpperCase();

		if (nextInput.length < 5) {
			alert('Please enter minimum 5 characters');
		} else {
			// Store the input result into the history array
			const guessResult = checkGuess(nextInput, answer);
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

			console.log('Guess Count: ' + nextGuessCount);

			// Check game result
			const isGuessCorrect =
				!!!nextInput.localeCompare(answer);
			console.log('Guess Result: ' + isGuessCorrect);

			if (
				nextGuessCount <= NUM_OF_GUESSES_ALLOWED &&
				isGuessCorrect
			) {
				setGameResult('Win');
			} else if (nextGuessCount >= NUM_OF_GUESSES_ALLOWED) {
				setGameResult('Lose');
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
				onChange={(event) => setInput(event.target.value)}
			/>
		</form>
	);
}

export default GuessInput;