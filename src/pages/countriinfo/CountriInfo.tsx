import { useParams } from 'react-router-dom'
import './countryinfo.css'
import { useFetchCountryInfo } from '../../api/countryInfoApi'

const CountriInfo = () => {

  const {countryname} = useParams()

  const {country} = useFetchCountryInfo(countryname)

  console.log(country)

  return (
   <div className='container'>
      <div className="countryinfo">
        <div>
          <button>Back</button>
        </div>
        <div className='row'>         
          <img src="https://flagcdn.com/w320/de.png" alt="" />          
          <div className="data">
              <h2>Belgium</h2>
              <div className='leftright'>
                <div className="left">
                  <p><b>Native Name:</b> Belgié</p>
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