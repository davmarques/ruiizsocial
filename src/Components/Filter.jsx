import '../styles/index.css'
import '../styles/mediaquery.css'

const Filter = ({ label, options, onChange }) => {
    return (
        <div className='filter-container'>
            <label>{label}:</label>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value="">Todos</option>
                {options.map((option) => (
                    <option key={option.value || option} value={option.value || option}>
                        {option.label || option}
                    </option>
                ))}
            </select>
        </div>

    )
}

export default Filter;