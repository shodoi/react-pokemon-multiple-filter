const Filter = ({allPokemon, name, select}) => {
	const lowercasedValue = name.toLowerCase().trim();
	return allPokemon
	.filter((pokemon) => {
		if ( lowercasedValue === "" ) {
			return allPokemon
		} else {
			return pokemon.name.toLowerCase().includes(lowercasedValue);
		}
	})
	.filter((pokemon) => {
		if( pokemon.types.includes(select)) {
			return true;
		} else {
			return false;
		}
	})
}

export default Filter;