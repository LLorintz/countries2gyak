
import CountryCard from '../components/countrycard/CountryCard'
import './allCountries.css'
import { useFetchCountries } from "../api/api"

const AllCountries = () => {

  const { countries } = useFetchCountries()

  console.log(countries)

  return (
    <div className="contrie-grid">
      {countries.map(country => (
        <CountryCard country={country}></CountryCard>
      ))}

    </div>
  )
}

export default AllCountries