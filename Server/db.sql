CREATE DATABASE event;

CREATE TABLE event(
  event_id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  e_date DATE,
  location VARCHAR(100)
)