const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

'use strict'

const [cohort, limit] = process.argv.slice(2);

pool.query(`
  SELECT students.id, students.name, cohorts.name AS cohort_name
  FROM students
  JOIN cohorts ON cohorts.id = students.cohort_id  WHERE cohorts.name LIKE '%${cohort}%'
  LIMIT ${limit || 5}
`)
.then(res => {
  if (res.rows.length === 0) {
    console.log('No results for that query!');
  }
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  });
})
.catch(err => {
  console.error('query error', err.stack)
});