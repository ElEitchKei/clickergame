import { useState } from 'react';

function App() {
  const [points, setPoints] = useState(0); // estado que guarda os pontos

  function handleClick() {
    setPoints(points + 1); // incrementa os pontos a cada clique
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>AutoClicker</h1>
      <h2>Pontos: {points}</h2>
      <button onClick={handleClick} style={{ fontSize: '24px', padding: '10px 20px' }}>
        CLICAR
      </button>
    </div>
  );
}

export default App;