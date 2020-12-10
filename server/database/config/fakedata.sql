
 INSERT INTO class (name) VALUES('A'),('B'),('C');
 INSERT INTO students (class_id,first_name,second_name,location) VALUES
  (1,'lina','jamal','rafah'),
  (2,'alaa','ahmed','gaza'),
  (2,'sami','omer','khan-yunis')
  RETURNING ID;
   INSERT INTO subjects (name) VALUES
  ('Math'),
  ('Sciences'),
  ('Arabic'),
  ('English'),
  ('Islamic Education')
  RETURNING ID;
     INSERT INTO student_subject (student_id,subject_id) VALUES
  (1,1),
  (1,2),
  (1,3),
  (2,1),
  (2,4),
  (3,5),
  (3,2)
  RETURNING ID;
