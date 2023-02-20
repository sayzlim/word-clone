import React from 'react';
import { checkGuess } from '../../game-helpers.js';

function GuessInput({ guessHistory, setGuessHistory, answer }) {
	const [input, setInput] = React.useState('Guess');

	function handleSubmit(event) {
		event.preventDefault();
		const nextInput = input.toUpperCase();

		if (nextInput.length < 5) {
			alert('Please enter minimum 5 characters');
		} else {
			const guessResult = checkGuess(nextInput, answer)

			const nextGuessHistory = [
				...guessHistory,
				{
					guess: guessResult,
					id: crypto.randomUUID(),
				},
			];
			setGuessHistory(nextGuessHistory);
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