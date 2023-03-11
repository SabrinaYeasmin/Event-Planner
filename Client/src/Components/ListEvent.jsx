import React, { Fragment, useEffect, useState } from 'react'
import EditEvent from './EditEvent'
import { MdDelete } from 'react-icons/md'

const ListEvent = () => {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:5001/event");
      const dataReceived = await response.json()
      setEvents(dataReceived)
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(() => {
    getEvents()
  }, [])

  const deleteEvent = async (id) => {
    try {
      const deleteEvent = await fetch(`http://localhost:5001/event/${id}`, {
        method: 'DELETE'
      })
      setEvents(events.filter(event => event.event_id !== id))
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">Event List</h1>
      <table className="table table-success table-striped text-center mt-2">
        <thead>
          <tr>
            <th scope="col">Event Name</th>
            <th scope="col">Date</th>
            <th scope="col">Location</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.event_id}>
              <td>{event.name}</td>
              <td>{event.e_date.slice(0, 10)}</td>
              <td>{event.location}</td>
              <td>
                <EditEvent event={event} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEvent(event.event_id)}
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}


export default ListEvent