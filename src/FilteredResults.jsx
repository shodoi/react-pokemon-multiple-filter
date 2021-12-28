const FilteredResults = ({filterPokemon}) => {

	return(
		<div>
			{filterPokemon.map((pokemon, index) => {

				const typeArray = pokemon.types.map((type, index) => {
					return [type];
				});

				return <div key={index} className="p-3 bg-white border rounded mx-1 my-3 shadow-sm leading-7">
					<div>No : {pokemon.no}</div>
					<div>なまえ : {pokemon.name}</div>
					<div>{pokemon.form && <span>リージョンフォーム : {pokemon.form}</span>}</div>
					<div>タイプ : {typeArray.join(',')}</div>
				</div>;
			})}
		</div>
	)
}

export default FilteredResults;