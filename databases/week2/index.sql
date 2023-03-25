-- Part 1:

-- 1. Add a new task:
INSERT INTO Task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('New task', 'This is a new task', '2023-03-25', '2023-03-25', '2023-04-01', 1, 1);

-- 2. Change the title of a task:
UPDATE Task
SET title = 'Modified title'
WHERE id = 1;

-- 3. Change a task due date:
UPDATE Task
SET due_date = '2023-04-05'
WHERE id = 1;

-- 4. UPDATE Task
SET status_id = 2
WHERE id = 1;

-- 5. Mark a task as complete:
UPDATE Task
SET status_id = 3
WHERE id = 1;

-- 6. Delete a task:
DELETE FROM Task
WHERE id = 1;


-- Part 2: 
CREATE DATABASE school_db;

USE school_db;

CREATE TABLE Class (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  begins DATE NOT NULL,
  ends DATE NOT NULL,
  status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started',
  PRIMARY KEY (id)
);

CREATE TABLE Student (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  class_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (class_id) REFERENCES Class(id)
);

CREATE INDEX idx_student_name ON Student (name);

-- Part 3: 

-- 1. Get all the tasks assigned to users whose email ends in @spotify.com:
SELECT *
FROM tasks
WHERE assigned_to IN (
  SELECT user_id
  FROM users
  WHERE email LIKE '%@spotify.com'
);

-- 2. Get all the tasks for 'Donald Duck' with status 'Not started':
SELECT *
FROM tasks
WHERE assigned_to = (
  SELECT user_id
  FROM users
  WHERE name = 'Donald Duck'
)
AND status = 'Not started';

-- 3. Get all the tasks for 'Maryrose Meadows' that were created in September:
SELECT *
FROM tasks
WHERE created_at >= '2022-09-01' AND created_at < '2022-10-01'
AND assigned_to = (
  SELECT user_id
  FROM users
  WHERE name = 'Maryrose Meadows'
);

-- 4. Find how many tasks were created in each month:
SELECT COUNT(*) AS num_tasks, MONTH(created_at) AS month
FROM tasks
GROUP BY MONTH(created_at);
