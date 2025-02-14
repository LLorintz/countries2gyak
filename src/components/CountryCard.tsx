import './countrycard.css'

const CountryCard = () => {
  return (
    <div className='countryCard'>
        <div className='countryImage'>
            <img src="https://flagcdn.com/w320/de.png" alt="" />
        </div>
        <div className='countryData'>
            <h3>Germany</h3>
            <p>Population:83240525</p>
            <p>Region:Europe</p>
            <p>Capital:Berlin</p>
        </div>
    </div>
  )
}

export default CountryCard