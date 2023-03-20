import axios from "axios"

const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(res => res.data)
}

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(res => res.data)
}

const update = (modPerson) => {
  const request = axios.put(`${baseUrl}/${modPerson.id}`, modPerson)
  return request.then(res => res.data)
}

const ser = {getAll, create, remove, update}

export default ser
