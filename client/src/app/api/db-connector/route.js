const mariadb = require('mariadb');

// Create a 'connection pool' using the provided credentials
const pool = mariadb.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_johnann5',
    password        : '6963',
    database        : 'cs340_johnann5'
})

export default pool