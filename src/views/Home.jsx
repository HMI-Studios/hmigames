import React, { useEffect, useState } from 'react';
import GameCard from '../components/GameCard.jsx';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    fetch('/data/games.json').then(async (response) => {
      const data = await response.json();
      setGamesData(data);
      setIsLoading(false);
    });
  }, []);

  const category = location.hash.substring(1);
  const games = [];
  if (isLoading) {
    for (let i = 0; i < 24; i++) {
      games.push(<article key={`skeleton_${i}`} className="card" style={{ height: '256px' }}></article>);
    }
  } else {
    for (const { title, shortname, categories, cover, src, description } of gamesData) {
      if (category && !categories.includes(category)) continue;
      games.push(<GameCard key={shortname} title={title} shortname={shortname} cover={cover} description={description} />);
    }
  }

  return (
    <>
      <section className="hero container">
        <div>
          <h2>Play free browser games</h2>
          <p>Responsive arcade website with categories, game pages, iframe embeds and unobtrusive ad slots.</p>
        </div>
        {/* <aside className="ad-box"></aside> */}
      </section>

      <section id="categories" className="container">
        <h2>Categories</h2>
        <div className="chips">
          <span>Action</span><span>Puzzle</span><span>Racing</span>
          <span>Sports</span><span>Retro</span><span>Adventure</span>
        </div>
      </section>

      <section id="games" className="container">
        <h2>Featured Games</h2>
        <div className="grid">
          {games}
        </div>
      </section>
    </>
  );
};

export default Home;