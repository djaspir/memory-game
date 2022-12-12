const Card = ({ pokemon, handleClick }) => {
  return (
    <div className="card" onClick={handleClick}>
      <img src={pokemon.image} alt={pokemon.name} />
      <h4>{pokemon.name}</h4>
    </div>
  );
};

export default Card;
