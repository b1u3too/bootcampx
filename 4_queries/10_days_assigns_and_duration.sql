SELECT day, count(*) AS number_of_assignments, sum(assignments.duration) AS duration
FROM assignments
GROUP BY day
ORDER BY day;