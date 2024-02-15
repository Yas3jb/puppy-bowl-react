import { useState, useEffect } from "react";
import { delPlayer, getAllPlayers, getSinglePlayer } from "../API";
import { Player } from "../components/Player";
import { PlayerDetails } from "../components/PlayerDetails";
import { NewPlayerForm } from "../components/NewPlayerForm";

export default function AllPlayers() {
  // State variables to manage players data
  const [players, setPlayers] = useState([]); // Players data
  const [player, setPlayer] = useState({}); // Selected player
  const [filter, setFilter] = useState(""); // Search filter

  // Fetch all players data
  useEffect(() => {
    getAllPlayers().then(setPlayers);
  }, []);

  // Function to handle displaying details
  function handleDetails(playerId) {
    getSinglePlayer(playerId).then(setPlayer);
  }

  // Function to handle deleting a player
  function handleDelete(playerId) {
    delPlayer(playerId).then(() => {
      // Refresh the players list after deleting a player
      getAllPlayers().then(setPlayers);
    });
  }

  // Function to handle updating players list after adding a new player
  function handlePlayerAdded(updatedPlayers) {
    setPlayers(updatedPlayers);
  }

  // Function to handle updating search filter
  function handleFilter(evt) {
    setFilter(evt.target.value);
  }

  return (
    <div className="container">
      <h2>Roster Page</h2>
      <p>Here you can ADD, DELETE, SEARCH and VIEW puppy DETAILS!</p>
      <p>PLEASE ONLY DELETE PLAYERS YOU CREATED. THANK YOU & ENJOY! ❤️️</p>
      <div onClick={() => setPlayer({})}>
        <PlayerDetails player={player} className="player-container" />
        <div className="form-container">
          <NewPlayerForm onPlayerAdded={handlePlayerAdded} />
          <label htmlFor="name">Search:</label>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={handleFilter}
          />
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Breed</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {players
                .filter((player) => player.name.toLowerCase().includes(filter))
                .map((player) => {
                  return (
                    <Player
                      key={player.id}
                      player={player}
                      onClick={handleDetails}
                      onDelete={handleDelete}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
