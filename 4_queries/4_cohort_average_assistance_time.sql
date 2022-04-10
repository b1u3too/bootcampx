SELECT cohorts.name, avg(assistance_requests.completed_at - assistance_requests.started_at) AS average_assistance_time
FROM cohorts
JOIN students on students.cohort_id = cohorts.id
JOIN assistance_requests ON assistance_requests.student_id = students.id
GROUP BY cohorts.name
ORDER BY average_assistance_time ASC;