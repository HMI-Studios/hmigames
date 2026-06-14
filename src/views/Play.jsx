import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Play = () => {
  const { gameShortname } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    fetch('/data/games.json').then(async (response) => {
      const data = await response.json();
      for (const game of data) {
        console.log(game)
        if (game.shortname === gameShortname) {
          setGameData(game);
          break;
        }
      }
      setIsLoading(false);
    });
  }, []);

  console.log(gameData)

  if (isLoading) {
    return (
      <>
        <h2></h2>

        <div className="game-frame"></div>

        <div className="below-game">
          {/* <aside className="ad-box tall"></aside> */}
        </div>
      </>
    );
  }

  return (
    <>
      <h2>{gameData.title}</h2>
      {/* <p className="desc">Replace this text with the game's description.</p> */}

      <div className="game-frame">
        <iframe frameborder="0" src={gameData.src} allowfullscreen="" title={gameData.title}></iframe>
      </div>

      <div className="below-game">
        <div>
          {/* <h3>About</h3> */}
          <p>{gameData.instructions}</p>
        </div>
        {/* <aside className="ad-box tall"></aside> */}
      </div>
    </>
  );
};

export default Play;