import { useEffect, useState } from 'react';
import styles from './Container.module.css'

const Container = () => {

  const [record, setRecord] = useState([])
  const [val, setVal] = useState("")

  // const url = "https://jsonplaceholder.typicode.com/users"
  // const url = "https://goweather.herokuapp.com/weather/Ny"

  function searchData() {
    fetch(`https://goweather.herokuapp.com/weather/${val}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setRecord(data)
      })
    console.log(record)
  }

  return <>
    <div className={styles.Container}>
      <h1>Wheather </h1>
      <h4>Name of City</h4>

      <input type="text" className={styles.inputBox} placeholder='First 3 letters of city name' value={val} onChange={(e) => setVal(e.target.value)} />
      <button className={styles.inputButton} onClick={() => searchData()}>Search </button>

      <p>Wheather Forcasting of {val}</p>

      <table border='1'>
        <tbody>
          <tr>
            <td>Description</td>
            <td>Temperature</td>
            <td>Wind</td>
          </tr>


          <tr>
            <td>{record.description}</td>
            <td>{record.temperature}</td>
            <td>{record.wind}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </>
}
export default Container;