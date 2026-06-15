let currentCategory = null;

const categories = {
  action: 'Action',
  puzzle: 'Puzzle',
  racing: 'Racing',
  strategy: 'Strategy',
  retro: 'Retro',
  adventure: 'Adventure',
};

function filterCategory(category) {
  const gamesHeading = document.querySelector('#games-heading');
  const allGames = document.querySelectorAll('#games .card');
  const allChips = document.querySelectorAll('#categories .chips span');
  allChips.forEach(game => game.classList.remove('selected'));
  if (category && currentCategory !== category) {
    allGames.forEach(game => game.classList.add('d-none'));

    const filteredGames = document.querySelectorAll(`#games .card[data-${category}]`);
    filteredGames.forEach(game => game.classList.remove('d-none'));

    document.querySelector(`#categories .chips span[data-${category}`).classList.add('selected');
    gamesHeading.textContent = `${categories[category]} Games`;
    currentCategory = category;
  } else {
    allGames.forEach(game => game.classList.remove('d-none'));
    gamesHeading.textContent = 'Featured Games';
    currentCategory = null;
  }
}
