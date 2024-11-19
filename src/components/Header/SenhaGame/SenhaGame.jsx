import React, { useState } from 'react';

function SenhaGame() {
  const [secretCode, setSecretCode] = useState(generateSecretCode());
  const [attempts, setAttempts] = useState([]);
  const [input, setInput] = useState('');

  function generateSecretCode() {
    let code = '';
    while (code.length < 4) {
      const digit = Math.floor(Math.random() * 10).toString();
      if (!code.includes(digit)) code += digit;
    }
    return code;
  }

  function checkGuess(guess) {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (guess[i] === secretCode[i]) {
        bulls++;
      } else if (secretCode.includes(guess[i])) {
        cows++;
      }
    }

    return { bulls, cows };
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (input.length !== 4) return alert("A tentativa deve ter 4 dígitos únicos.");

    const result = checkGuess(input);
    setAttempts([{ guess: input, ...result }, ...attempts]);
    setInput('');
  }

  function showSecretCode() {
    alert(`A combinação secreta é: ${secretCode}`);
  }

  return (
    
    <div>
      <h1>Jogo Senha</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength="4"
          placeholder="Digite sua tentativa"
        />
        <button type="submit">Enviar</button>
      </form>
      <button onClick={showSecretCode}>Mostrar Senha</button>

      <h2>Tentativas Anteriores</h2>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>
            Tentativa: {attempt.guess} - Bulls: {attempt.bulls}, Cows: {attempt.cows}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SenhaGame;