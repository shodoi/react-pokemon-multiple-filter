const NameFilter = ({value, onChange}) => {
	return (
		<input
			id="name"
			className="z-50 z-10 container text-left md:text-center justify-center mb-3 rounded"
			type="text"
			placeholder="なまえ"
			value={value}
			onChange={onChange}
		/>
	)
}

export default NameFilter;