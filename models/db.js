import dok_db_conn from '../config/sql_config.cjs'

const db = (stmt) => {
  return dok_db_conn.query(stmt, (error, results, fields) => {
    if (error) console.error(error)
    return results
  })
}

module.exports = db