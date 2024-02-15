export function Player({ player, onClick, onDelete }) {
  return (
    <tr key={player.id}>
      <td>{player.name}</td>
      <td>{player.breed}</td>

      <td>
        <button className="details-btn" onClick={() => onClick(player.id)}>
          Details
        </button>
        <button className="del-btn" onClick={() => onDelete(player.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
