import Country from "./Country";

const Countries = ({countries, handleShow}) => {
  if (countries.length === 1) {
    const country = countries[0]
    return (
      <div>
        <h2>{country.name.common}</h2>
        <div>Capital: {country.capital[0]}</div>
        <div>Area: {country.area} </div>
        <h4>Languages:  </h4>
        <ul>
          {Object.values(country.languages).map(lang => <li>{lang}</li>)}
        </ul>
        <img src={country.flags.svg} alt="flag" width={"200px"} />
      </div>
    )
  }
    

  return ( 
    <div>
      {countries.length > 10 ?
        <div>Too many matches, specify another filter</div> :
        countries.map(country => <Country country={country} key={country.name.common} handleClick={() => handleShow(country)} />)
      }
    </div>
  );
}
 
export default Countries;