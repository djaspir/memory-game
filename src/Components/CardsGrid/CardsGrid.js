import Card from "./Card";

const CardsGrid = ({ pokemon, handlePokemonClick }) => {
  const pokemonCards = pokemon.map((item) => (
    <Card key={item.id} pokemon={item} handleClick={handlePokemonClick} />
  ));

  return <div className="card-grid">{pokemonCards}</div>;
};

export default CardsGrid;
