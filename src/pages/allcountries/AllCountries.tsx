import Search from '../../components/search/Search'
import CountryCard from '../../components/countrycard/CountryCard'
import './allCountries.css'
import { useFetchCountries } from '../../api/api'
import { useEffect, useState } from 'react'
import Filter from '../../components/Filter/Filter'

const AllCountries = () => {
  const { countries, loading, error } = useFetchCountries()
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  return (
    <>
      <div className='top'>
        <Search setCountries={setFilteredCountries} countries={countries}></Search>
        <Filter setCountries={setFilteredCountries} countries={countries}></Filter>
      </div>
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