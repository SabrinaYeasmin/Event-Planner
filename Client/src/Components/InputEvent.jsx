import React, {Fragment, useState} from 'react'
import './InputEvent.css'

const InputEvent = () => {
  
  let newDate = new Date().toJSON().slice(0,10);

  const [name, setName] = useState('')
  const [e_date, setDate] = useState(newDate)
  const [location, setLocation] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {name, e_date, location }
      const response = await fetch('http://localhost:5001/event', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
      window.location = '/'
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <div className="event-input">
        <h1 className="text-center mt-5 event-tracker">Event Tracker</h1>
        <form onSubmit={onSubmitForm}>
          <label for="event-input" className="form-label mt-4">
            Event Name
          </label>
          <input
            type="text"
            className="form-control"
            id="event-input"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="event-date" className="form-label mt-4">
            Event Date
          </label>
          <input
            type="date"
            className="form-control"
            id="event-date"
            required
            value={e_date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label for="event-location" className="form-label mt-4">
            Event Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location-location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-success mt-2 add-btn">Add</button>
        </form>
      </div>
    </Fragment>
  );
}


export default InputEvent