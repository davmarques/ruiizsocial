import '../styles/index.css'
import '../styles/mediaquery.css'

const Filter = ({ label, options, onChange }) => {
    console.log(`Prop onChange recebida para ${label}`)
    return (
        <div className='filter-container'>
            <select className='filter-select' onChange={(e) => onChange(e.target.value)}>
                <option className='option-select' value="">
                    {label}
                </option>
                {options && options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

        </div>

    )
}

export default Filter;