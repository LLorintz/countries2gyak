import { useEffect, useState } from "react"
import { countryInfoType } from "../type/countryInfoType"

const fetchCountryInfo=async(countryname:string)=>{
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryname}`)
      if (!response.ok) {
        throw new Error
      }
      const data = await response.json()
     
      return data[0]
    } catch (error) {
      console.log(error)
      return null
    }
  }


export const useFetchCountryInfo =(countryname?:string)=>{

    const [country, setCountry] = useState<countryInfoType>()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const getCountryInfo = async () =>{
           try {
            if (countryname) {
                const data = await fetchCountryInfo(countryname)   
                if (data) {
                    setCountry(data)
                }
            }         
             else{
                 setError('Fail to download data')
             }
           } catch (error) {
                setError("netowrk Error")
           }finally{
             setLoading(false)
           }
        }
        getCountryInfo();
    },[countryname])

    return { country, loading, error, };
}
  