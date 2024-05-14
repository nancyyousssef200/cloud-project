CREATE  DATABASE cloud;
USE cloud;

CREATE TABLE students(
    Student_ID int unique not null,
    Name varchar(100) not null,
    Age int not null,
    CGPA decimal(5,4) not null,
    PRIMARY KEY(Student_ID)
);
INSERT INTO students (Student_ID, Name, Age, CGPA) VALUES
(22012042, 'Sara Yehia', 20, 3.65),
(22010393, 'Nancy Youssef', 19, 3.45),
(22011552, 'Kenzy Ashraf', 20, 3.83),
(22011561, 'Aliaa Abdo', 20, 3.91),
(22010114, 'Mayar Mohamed', 20, 3.81);
