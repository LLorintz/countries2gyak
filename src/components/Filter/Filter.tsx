import { useState } from "react"
import { countryType } from "../../type/countryType"
import './filter.css'

type searchProps = {
    countries: countryType[]
    setCountries:(countries:countryType[])=>void
}

const Filter = ({countries, setCountries}: searchProps) => {

    const [input, setInput] = useState('')

    const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const region = e.target.value;
        setInput(region);

        // Szűrjük az országokat a kiválasztott régió alapján
        if (region) {
            const filtered = countries.filter(country => country.region === region);
            setCountries(filtered);
        } else {
            // Ha nincs kiválasztott régió, visszaállítjuk az összes országot
            setCountries(countries);
        }
    }

    

  return (
    <select value={input} onChange={handleSelection}>
        <option className="option" value="">Filter by Region</option>
        <option className="option" value="Africa">Africa</option>
        <option className="option" value="America">America</option>
        <option className="option" value="Asia">Asia</option>
        <option className="option" value="Europe">Europe</option>
        <option className="option" value="Oceania">Oceania</option>
    </select>
  )
}

export default Filter