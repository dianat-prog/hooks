import PropTypes from 'prop-types';

const CharacterCard = ({ cardProp }) => {
    if (!cardProp) return <p>Cargando...</p>;

    return (
      <div>
        <h2>{cardProp.name}</h2>
        <img src={cardProp.image} alt={cardProp.name} />
      </div>
    );
};


CharacterCard.propTypes = {
  cardProp: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;


