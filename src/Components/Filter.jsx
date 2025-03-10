import '../styles/index.css'
import '../styles/mediaquery.css'
import { IoIosArrowForward } from 'react-icons/io';

const Filter = ({ label, options, onChange }) => {
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