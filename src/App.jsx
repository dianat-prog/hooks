import useFetchData from './hooks/useCustomHook';
import CharacterCard from './components/CharacterCard';

const App = () => {
  const { data: pokemon, loading: loadingPokemon, error: errorPokemon } = useFetchData('https://pokeapi.co/api/v2/pokemon/1');
  const { data: rick, loading: loadingRick, error: errorRick } = useFetchData('https://rickandmortyapi.com/api/character/1');

  return (
    <div>
      {loadingPokemon && <p>Cargando Pokémon...</p>}
      {errorPokemon && <p>Error: {errorPokemon}</p>}
      {pokemon && <CharacterCard cardProp={{ name: pokemon.name, image: pokemon.sprites.front_default }} />}


      {loadingRick && <p>Cargando Rick...</p>}
      {errorRick && <p>Error: {errorRick}</p>}
       {rick && <CharacterCard cardProp={{ name: rick.name, image: rick.image}} />}
    </div>
  );
};

export default App;

