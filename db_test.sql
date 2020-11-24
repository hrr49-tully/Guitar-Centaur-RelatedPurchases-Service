SET old_passwords=0;
CREATE USER 'student'@'localhost' IDENTIFIED BY 'password';
ALTER USER 'student'@'localhost' IDENTIFIED BY 'password';
GRANT ALL on *.* to student;
FLUSH PRIVILEGES;
SET PASSWORD FOR 'student'@'localhost' = PASSWORD('password');
FLUSH PRIVILEGES;