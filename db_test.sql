SET old_passwords=0;
CREATE USER 'student'@'%' IDENTIFIED BY 'password';
ALTER USER 'student'@'%' IDENTIFIED BY 'password';
GRANT ALL on *.* to student;
FLUSH PRIVILEGES;
SET PASSWORD FOR 'student'@'%' = OLD_PASSWORD('password');
FLUSH PRIVILEGES;