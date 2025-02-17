import Search from '../../components/search/Search'
import CountryCard from '../../components/countrycard/CountryCard'
import './allCountries.css'
import { useFetchCountries } from '../../api/api'
import { useEffect, useState } from 'react'

const AllCountries = () => {
  const { countries, loading, error } = useFetchCountries()
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  return (
    <>
    <Search setCountries={setFilteredCountries} countries={countries}></Search>
      <div className="contrie-grid">
        {loading && !error && <h4>Loading...</h4>}
        {error && !loading && <h4>{error}</h4>}
        {filteredCountries.map(country => (
          <CountryCard country={country}></CountryCard>
        ))}

      </div>
    </>  
  )
}

export default AllCountries