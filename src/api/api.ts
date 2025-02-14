export const fetchCountries = async()=>{
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      if (!response.ok) {
       throw new Error
      }
      const data = await response.json()
      console.log(data)
    } catch (error) {
     console.log(error);
    }
   }