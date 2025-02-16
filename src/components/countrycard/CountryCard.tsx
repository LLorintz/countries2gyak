import './countrycard.css'
import { countryType } from '../../type/countryType' 
import { Link } from 'react-router-dom'

type countryProps = {
  country:countryType
}

const CountryCard = ({country}:countryProps) => {
  return (
    <Link to={`/country/${country.name.common}`}>
    <div className='countryCard'>
        <div className='countryImage'>
            <img src={country.flags.png} alt="" />
        </div>
        <div className='countryData'>
            <h3>{country.name.common}</h3>
            <p>Population:{country.population}</p>
            <p>Region:{country.region}</p>
            <p>Capital:{country.capital}</p>
        </div>
    </div>
    </Link>
  )
}

export default CountryCard