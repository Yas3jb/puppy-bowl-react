import { useState, useEffect } from "react";

// Component to display details of a player
export function PlayerDetails({ player }) {
  // State variable to manage the visibility of player details
  const [isOpen, setIsOpen] = useState(false);

  // Effect to update the visibility of player
  useEffect(() => {
    // Set isOpen to true if player data exists, otherwise set it to false
    setIsOpen(!!player.id);
  }, [player]);

  // Function to handle closing the player details
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="player-details">
      {isOpen && (
        <dialog open={isOpen} className="dialog">
          <img
            src={player.imageUrl}
            alt="image not found"
            style={{
              maxWidth: "20vw",
              maxHeight: "54vw",
            }}
          />
          <p>ID: {player.id}</p>
          <p>Name: {player.name}</p>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <p>Created At: {player.createdAt}</p>

          <button className="close-btn" onClick={handleClose}>
            Close
          </button>
        </dialog>
      )}
    </div>
  );
}
