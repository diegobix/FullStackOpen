import Person from "./Person";

const Persons = ({persons, handleDelete}) => {
  return (
    <div>
      {persons.map(person => <Person person={person} key={person.id} handleDelete={handleDelete} /> )}
    </div>
  );
}
 
export default Persons;