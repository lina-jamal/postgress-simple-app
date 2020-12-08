
 INSERT INTO class (name) VALUES('A'),('b'),('c');
 INSERT INTO students (first_name,second_name,location) VALUES
  ('lina','jamal','rafah'),
  ('alaa','ahmed','gaza'),
  ('sami','omer','khan-yunis')
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
