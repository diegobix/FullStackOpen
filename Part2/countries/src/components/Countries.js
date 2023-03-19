import Country from "./Country";

const Countries = ({countries, handleShow}) => {
  return ( 
    <div>
      {countries.length > 10 ?
        <div>Too many matches, specify another filter</div> :
        countries.map(country => <Country country={country} key={country.name.common} handleClick={() => handleShow(country)} infoExpand={countries.length === 1} />)
      }
    </div>
  );
}
 
export default Countries;