const TypeFilter = ({selectType, typeList, onChange}) => {
	return (
		<div className="flex flex-wrap mb-5 leading-7">
			{typeList &&
				typeList.map((type, index) => {
					return (
						<div key={index} className="mr-5">
							<input
								type="radio"
								id={`type${index}`}
								className=""
								name="type"
								value={type}
								onChange={onChange}
								checked={selectType === type}
							/>
							<label
								htmlFor={`type${index}`}
								className="form-check-label inline-block text-gray-800"
							>
							{type}
							</label>
						</div>
					)
				})
			}
		</div>
	)
}

export default TypeFilter;