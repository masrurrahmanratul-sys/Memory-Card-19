import {useState, useEffect} from 'react';
import Scoreboard from './Component/Scoreboard';
import CardGrid from "./Component/CardGrid";
import './App.css';

function App() {
  const [card, setCard] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        async function fetchPokemon() {

            const pokemonList = [];

            for (let i = 1; i <= 12; i++) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = await response.json();
                pokemonList.push({
                    id: data.id,
                    name: data.name,
                    image: data.sprites.other["official-artwork"].front_default,
                });
            }

            setCard(pokemonList);
        }

        fetchPokemon();
    }, []);

    function shuffleCards(arry) {
        const shuffledArray = [...arry];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    function handleCardClick(id) {
        if (clickedCards.includes(id)) {
            if (score > highScore) {
                setHighScore(score);
            }
            setScore(0);
            setClickedCards([]);
        } else {
            setClickedCards([...clickedCards, id]);
            setScore(score + 1);
            if (score + 1 > highScore) {
                setHighScore(score + 1);
            }
        }

        setCard(shuffleCards(card));
            }

            return (
    <div className="app">
      <h1>Pokemon Memory Game</h1>
      <p className="instructions">
        Click each card only once! Don't click the same card twice!
      </p>

      {/* pass scores to Scoreboard */}
      <Scoreboard
        score={score}
        highScore={highScore}
      />

      {/* pass cards and click handler to CardGrid */}
      <CardGrid
        cards={card}
        onCardClick={handleCardClick}
      />
    </div>
  );
}

export default App;