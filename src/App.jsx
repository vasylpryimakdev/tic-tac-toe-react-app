function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <li>
          <span className="player-name">Player 1</span>
          <span className="player-symbol">X</span>
        </li>
        <li>
          <span className="player-name">Player 2</span>
          <span className="player-symbol">0</span>
        </li>
      </ol>
      Game Board
    </div>
  );
}

export default App;
