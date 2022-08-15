import './Select.scss'

const Select = ({ name, valueArray }) => {

    return (
        <div className="select">
            <select name={name} id={name}>
                {valueArray.map(value => {
                    return (
                        <option className='option' value={value.slug}>{value.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select;