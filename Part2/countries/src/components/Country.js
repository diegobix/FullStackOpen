import Weather from "./Weather";

const Country = ({country, handleClick, infoExpand=false}) => {
  if (infoExpand === false) 
    return ( 
      <div>
        {country.name.common}
        <button onClick={handleClick}>Show</button>
      </div>
    );

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>Capital: {country.capital[0]}</div>
      <div>Area: {country.area} </div>
      <h4>Languages:  </h4>
      <ul>
        {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
      </ul>
      <img src={country.flags.svg} alt="flag" width={"200px"} />
      <br />
      <Weather lat={country.capitalInfo.latlng[0]} long={country.capitalInfo.latlng[1]} city={country.capital[0]} />
    </div>
  )
}
 
export default Country;