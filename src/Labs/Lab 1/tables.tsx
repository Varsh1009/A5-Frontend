const Table = () => {
    const games = [
      { name: "The Legend of Zelda: Tears of the Kingdom", genre: "Action-Adventure", releaseYear: 2023, platform: "Nintendo Switch" },
      { name: "Cyberpunk 2077: Phantom Liberty", genre: "RPG", releaseYear: 2023, platform: "PC, PS5, Xbox Series X/S" },
      { name: "Baldur's Gate 3", genre: "RPG", releaseYear: 2023, platform: "PC, PS5" },
      { name: "Elden Ring", genre: "Action RPG", releaseYear: 2022, platform: "PC, PS4, PS5, Xbox" },
      { name: "Starfield", genre: "Sci-Fi RPG", releaseYear: 2023, platform: "PC, Xbox Series X/S" }
    ];
  
    return (
      <table className="game-table">
        <thead>
          <tr>
            <th>Game Name</th>
            <th>Genre</th>
            <th>Release Year</th>
            <th>Platform</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr key={index}>
              <td>{game.name}</td>
              <td>{game.genre}</td>
              <td>{game.releaseYear}</td>
              <td>{game.platform}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  