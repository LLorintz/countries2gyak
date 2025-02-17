
import CountryCard from '../../components/countrycard/CountryCard'
import './allCountries.css'
import { useFetchCountries } from '../../api/api'

const AllCountries = () => {

  const { countries, loading, error } = useFetchCountries()

  console.log(countries)

  return (
    <div className="contrie-grid">
       {loading && !error && <h4>Loading...</h4>}
       {error &&! loading && <h4>{error}</h4>}
      {countries.map(country => (
        <CountryCard country={country}></CountryCard>
      ))}

    </div>
  )
}

export default AllCountries