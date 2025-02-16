import { useParams } from 'react-router-dom'
import './countryinfo.css'
import { useFetchCountryInfo } from '../../api/countryInfoApi'
import { Link } from 'react-router-dom'

const CountriInfo = () => {

  const {countryname} = useParams()

  const {country} = useFetchCountryInfo(countryname)

  console.log(country)

  return (
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
                  <p><b>Population:</b> 11,319,511</p>
                  <p><b>Region:</b>Europe</p>
                  <p><b>Sub Region:</b> Western </p>
                  <p><b>Capital:</b> Brussels</p>
                </div>
                <div className="right">
                  <p><b>Top Level Domain:</b> be</p>
                  <p><b>Currencies:</b> Euro</p>
                  <p><b>Languages:</b> Deutch, french, German</p>
                </div>
              </div>
              
              <div className="bordercountries">
                <p>Border Countries:</p>
                <button>France</button> 
              </div>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default CountriInfo