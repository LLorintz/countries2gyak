import { useEffect, useState } from "react"
import CountryCard from "../components/CountryCard"
import { fetchCountries } from "../api/api"
import { countryType } from "../type/countryType"
import { useFetchCountries } from "../api/api"

const AllCountries = () => {

const {countries} = useFetchCountries()
  
console.log(countries)

  return (
    <div>
        {countries.map(country=>(
          <CountryCard country={country}></CountryCard>
        ))}
        
    </div>
  )
}

export default AllCountries