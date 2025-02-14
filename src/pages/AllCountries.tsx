import { useEffect } from "react"
import CountryCard from "../components/CountryCard"
import { fetchCountries } from "../api/api"

const AllCountries = () => {


  
  useEffect(()=>{fetchCountries()},[])

  return (
    <div>
        <CountryCard></CountryCard>
    </div>
  )
}

export default AllCountries