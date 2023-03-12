const Pool= require('pg').Pool

const pool= new Pool({
    user:'postgres', 
    password: 'sinthy123',
    port: 5432,
    host: 'localhost',
    database: 'event',
})


module.exports=pool