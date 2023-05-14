/* 1. How many tasks are in the task table? */
SELECT COUNT(*) FROM task;

/* 2. How many tasks in the task table do not have a valid due date? */
SELECT COUNT(*) FROM task WHERE due_date IS NULL OR due_date < CURRENT_DATE;

/* 3. All the tasks that are marked as done. */
SELECT * FROM task WHERE is_done = TRUE;

/* 4. All the tasks that are not marked as done. */
SELECT * FROM task WHERE is_done = FALSE;

/* 5. All the tasks, sorted with the most recently created first */
SELECT * FROM task ORDER BY created_at DESC;

/* 6. The single most recently created task. */
SELECT * FROM task ORDER BY created_at DESC LIMIT 1;

/* 7. The title and due date of all tasks where the title or description contains "database". */
SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';

/* 8. The title and status (as text) of all tasks. */
SELECT title, CASE is_done WHEN TRUE THEN 'Done' ELSE 'Not done' END AS status FROM task;

/* 9. The name of each status, along with a count of how many tasks have that status. */
SELECT CASE is_done WHEN TRUE THEN 'Done' ELSE 'Not done' END AS status, COUNT(*) as count FROM task GROUP BY status;

/* 10. The names of all statuses, sorted by the status with most tasks first. */
SELECT CASE is_done WHEN TRUE THEN 'Done' ELSE 'Not done' END AS status, COUNT(*) as count FROM task GROUP BY status ORDER BY count DESC;

