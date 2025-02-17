import { useParams } from 'react-router-dom'
import './countryinfo.css'
import { useFetchCountryInfo } from '../../api/countryInfoApi'
import { Link } from 'react-router-dom'

const CountriInfo = () => {

  const {countryname} = useParams()

  const {country,loading,error} = useFetchCountryInfo(countryname)

  console.log(country)

  return (
  <>
  {loading && !error && <h4>Loading...</h4>}
  {error &&! loading && <h4>{error}</h4>}
   <div className='container'>
      <div className="countryinfo">
        <div>
        <Link to={'/'}><button>Back</button></Link>
        </div>
        <div className='row'>         
          <img src={country?.flags.png} alt="" />          
          <div className="data">
              <h2>{country?.name.common}</h2>
              <div className='leftright'>
                <div className="left">
                  <p><b>Native Name:</b> {country?.name.nativeName && Object.values(country.name.nativeName)[0]?.common}</p>
                  <p><b>Population:</b> {country?.population.toLocaleString("en-US")}</p>
                  <p><b>Region:</b>{country?.region}</p>
                  <p><b>Sub Region:</b>{country?.subregion}</p>
                  <p><b>Capital:</b>{country?.capital}</p>
                </div>
                <div className="right">
                  <p><b>Top Level Domain:</b>{country?.tld[0]}</p>
                  <p><b>Currencies: </b>{country?.currencies && Object.values(country?.currencies)[0].name}</p>
                  <p><b>Languages: </b>{country?.languages && Object.values(country.languages).join(", ")}</p>
                </div>
              </div>
              
              <div className="bordercountries">
                <p>Border Countries:</p>
                {country?.borders.map(country=>(
                  <button>{country}</button>
                  
                ))}
                 
              </div>
          </div>          
        </div>
      </div>
    </div>
  </>
  )
}

export default CountriInfo