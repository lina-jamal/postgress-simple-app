BEGIN ;
 DROP TABLE IF EXISTS class,students,subjects,student_subject  CASCADE ;

CREATE TABLE class (
  id      serial PRIMARY KEY,
  name    varchar(100)  NOT NULL

);
CREATE TABLE students (
  id serial PRIMARY KEY,
  -- class_id        integer default 1  REFERENCES class(id) ON UPDATE CASCADE,
  first_name       varchar(100)  NOT NULL,
  second_name      varchar(100)  NOT NULL,
  location         varchar(100) 
);
CREATE TABLE subjects (
  id      serial PRIMARY KEY,
  name    varchar(100)  NOT NULL

);
CREATE TABLE student_subject  (
  id      serial PRIMARY KEY,
  student_id   integer REFERENCES students(id) ON UPDATE CASCADE,
  subject_id integer REFERENCES subjects(id) ON UPDATE CASCADE

);

COMMIT;