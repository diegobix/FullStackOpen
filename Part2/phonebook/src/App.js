import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons'
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    personService.getAll().then(initPers => {
      setPersons(initPers)
    })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = event => {
    setFilter(event.target.value)
  }

  const personsToShow = (filter.length === 0)
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    
    if (persons.some(person => person.name === newPerson.name)) {
      if (window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)) 
        updatePerson(newPerson)

      clearInputs()
      return
    }

    personService.create(newPerson).then(addedPerson => {
      setPersons([...persons, addedPerson])
      makeNotification(`Added ${addedPerson.name}`, false)
    })
    clearInputs()
  }

  const updatePerson = (modPerson) => {
    const person = persons.find(p => p.name === modPerson.name)
    modPerson = {...modPerson, id: person.id}
    personService.update(modPerson).then(updatedPerson => {
      setPersons(persons.map(p => p.id === updatedPerson.id ? updatedPerson : p))
      makeNotification(`Updated ${updatedPerson.name}`, false)
    })
  }

  const removePerson = (person) => {
    if (!window.confirm(`Delete ${person.name}?`)) return
    personService.remove(person.id).then(data => {
      setPersons(persons.filter(p => p.id !== person.id))
      makeNotification(`Removed ${person.name}`, false)
    }).catch(error => {
      makeNotification(`Information of ${person.name} has already been removed from server`, true)
    })
  }

  const clearInputs = () => {
    setNewName('')
    setNewNumber('')
  }

  const makeNotification = (mes, error=false) => {
    console.log(error);
    setIsError(error)
    setMessage(mes)
    setTimeout(() => {
      setMessage(null)
    }, 5000);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} isError={isError} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add new contact</h2>
      <PersonForm 
        newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDelete={removePerson} />
    </div>
  )
}

export default App