import React, {Fragment, useState} from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import './EditEvent.css'

const EditEvent = ({ event }) => {

  const [name, setName] = useState(event.name);
  const [e_date, setDate] = useState(event.e_date);
  const [location, setLocation] = useState(event.location);

  const updateEvent = async (e) => {
    e.preventDefault();
    try {
      const body = { name, e_date, location };
      const response = await fetch(
        `http://localhost:5001/event/${event.event_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target={`#id${event.event_id}`}
      >
        <AiOutlineEdit />
      </button>

      <div className="modal" id={`id${event.event_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Event</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setName(event.name)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="date"
                className="form-control mt-1"
                value={e_date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="text"
                className="form-control mt-1"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-success"
                onClick={(e) => updateEvent(e)}
              >
                <BiSave />
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setName(event.name)}
              >
                <AiFillCloseCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditEvent