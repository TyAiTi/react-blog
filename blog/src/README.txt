 CREATE USER 'blog'@'*' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON blog.* TO 'blog'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;
 FLUSH PRIVILEGES;
