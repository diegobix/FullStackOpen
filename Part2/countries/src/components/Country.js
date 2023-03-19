const Country = ({country, handleClick}) => {
  return ( 
    <div>
      {country.name.common}
      <button onClick={handleClick}>Show</button>
    </div>
   );
}
 
export default Country;