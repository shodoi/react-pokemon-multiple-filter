// https://catalins.tech/search-and-filter-data-in-react-using-hooks

import React, { useEffect, useState } from "react";

import NameFilter from "./NameFilter";
import TypeFilter from "./TypeFilter";
import Filter from "./Filter";
import FilteredResults from "./FilteredResults";
import "./App.css";

const typeList = ["ノーマル", "ほのお", "みず", "でんき", "くさ", "こおり", "かくとう", "どく", "じめん", "ひこう", "エスパー", "むし", "いわ", "ゴースト", "ドラゴン", "あく", "はがね", "フェアリー"]

const App = () => {

	const [allPokemon, setAllPokemon] = useState([]); // 全てのポケモン格納用
	const [filterPokemon, setFilterPokemon] = useState([]); // フィルタ済ポケモン格納用
	const [pokeName, setPokeName] = useState(""); // なまえ
	const [pokeTypes, setPokeTypes] = useState(''); // たいぷ

	useEffect(() => {
		fetch("../pokemon_data.json", { method: "GET" })
			.then((res) => res.json())
			.then((data) => {
				setAllPokemon(data);
				setFilterPokemon(data);
			});
	}, []);

	const handleSearchChange = (value) => {
		const name = value;
		const select = pokeTypes;
		const filterResults = Filter( {allPokemon, name, select} );
		setPokeName(value);
		setFilterPokemon(filterResults);
	};

	const handleCheckboxChange = (value) => {
		const name = pokeName;
		const select = value;
		const filterResults = Filter( {allPokemon, name, select });
		setPokeTypes(value);
		setFilterPokemon(filterResults);
	}

	return (
		<div className="max-w-lg App container my-10 mx-auto">
			<NameFilter
				value={pokeName}
				onChange={(e) => handleSearchChange(e.target.value)}
			/>
			<TypeFilter
				typeList={typeList}
				selectType={pokeTypes}
				onChange={(e) => handleCheckboxChange(e.target.value)}
			/>
			<FilteredResults filterPokemon={filterPokemon} />
		</div>
	);
};

export default App;
