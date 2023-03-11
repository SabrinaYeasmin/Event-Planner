const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json()) // req.body

// POST - create event

app.post('/event', async (req, res) => {
  try {
    const {name, e_date, location} = req.body
    const newEvent = await pool.query(
      'INSERT INTO event (name,e_date,location) VALUES($1,$2,$3) RETURNING *', 
      [name, e_date, location]  
    )
    res.json(newEvent.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

// GET - all events

app.get('/event', async (req, res) => {
  try {
    const allEvents = await pool.query('SELECT * FROM event')
    res.json(allEvents.rows)
  } catch (error) {
    console.error(error.message)
  }
})

// GET - onse single event

app.get('/event/:id', async (req, res) => {
  try {
    const {id} = req.params
    const singleEvent = await pool.query('SELECT * FROM event WHERE event_id = $1', [id])
    res.json(singleEvent.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

// PUT - update event

app.put('/event/:id', async (req, res) => {
  try {
    const {id} = req.params
    const {name, e_date, location} = req.body
    const updateEvent = await pool.query(
      'UPDATE event SET name = $1, e_date = $2, location = $3  WHERE event_id = $4',
      [name, e_date, location, id] 
    )
    res.json('event was updated')
  } catch (error) {
    console.error(error.message)
  }
})

// DELETE - delete event

app.delete('/event/:id', async (req, res) => {
  try {
    const {id} = req.params
    const deleteEvent = await pool.query('DELETE FROM event WHERE event_id = $1', [id])
    res.json('Event was deleted!')
  } catch (error) {
    console.error(error.message)
  }
})


app.listen(5001, () => {
  console.log('Server has started on port 5001');
})