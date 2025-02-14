import { useEffect, useState } from "react"
import { countryType } from "../type/countryType"

export const fetchCountries = async()=>{
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      if (!response.ok) {
       throw new Error
      }
      const data = await response.json()
     
      return data;

    } catch (error) {
     console.log(error);
     return null;
    }
   }

  export const useFetchCountries = () => {
    const [countries, setCountries] = useState<countryType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const getCountries = async () => {
        try {
          const data = await fetchCountries();
          if (data) {
            setCountries(data);
          } else {
            setError("Nem sikerült betölteni az adatokat.");
          }
        } catch (err) {
          setError("Hálózati hiba történt.");
        } finally {
          setLoading(false);
        }
      };
  
      getCountries();
    }, []);
  
    return { countries, loading, error, };
  };