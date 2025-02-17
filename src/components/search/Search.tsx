import { FormEvent, useState } from "react"
import { countryType } from "../../type/countryType"

type searchProps = {
    countries: countryType[]
    setCountries:(countries:countryType[])=>void
}

const Search = ({ countries,setCountries }: searchProps) => {

    const [input, setInput] = useState('')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        const filtered = countries.filter(country =>
            country.name.common.toLowerCase().includes(input.toLowerCase())
        );
        setCountries(filtered);
    }

    return (
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="Search for a country..." value={input} onChange={handleInputChange} />
    </form>)

}

export default Search