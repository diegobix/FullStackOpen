import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import countriesService from './services/countriesService'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    countriesService.getAll().then(allCountries => {
      setCountries(allCountries)
      setFilteredCountries(allCountries)
    })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(event.target.value)))
  }

  const handleShow = country => {
    setFilteredCountries(countries.filter(c => c === country))
  }

  return (
    <>
      <Filter  filter={filter} handleFilterChange={handleFilterChange} />
      <Countries countries={filteredCountries} handleShow={handleShow} />
    </>
  );
}

export default App;
