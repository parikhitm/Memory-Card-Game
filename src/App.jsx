import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const pokemons = []
    for (let i = 1; i <= 12; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const data = await response.json()
      pokemons.push({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      })
    }
    setCards(pokemons);
  }

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setFinalScore(score);
      setShowModal(true);
      if (score > bestScore) setBestScore(score);
      setScore(0);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, id]);
      setScore(score + 1);
      shuffleCards();
    }
  }

  const restartGame = () => {
    setShowModal(false);
    setScore(0);
    setClickedCards([]);
    shuffleCards();
  }

  return (
    <div className='app'>
      <header>
        <h1>Memory Card Game</h1>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
        <div className='scores'>
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </header>
      <div className='card-grid'>
        {cards.map(card => (
          <div key={card.id} className='card' onClick={() => handleCardClick(card.id)}>
            <img className='card-image' src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
      {showModal && (
        <div className='modal-overlay'>
          <div className='modal'>
            <h2>Game Over!</h2>
            <div className='modal-scores'>
              <p>Your Score: {finalScore}</p>
              <p>Best Score: {bestScore}</p>
            </div>
            <button type='button' onClick={restartGame}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
