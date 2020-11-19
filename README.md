# Guitar-Centaur-RelatedPurchases-Service

> Related purchases carousel and details for an individual item.

## Related Projects

  - https://github.com/hrr49-tully/Guitar-Centaur-RelatedPurchases-Proxy
  - https://github.com/hrr49-tully/Guitar-Centaur-Carousel-Service
  - https://github.com/hrr49-tully/Guitar-Centaur-Carousel-Proxy
  - https://github.com/hrr49-tully/Guitar-Centaur-Reviews-Service
  - https://github.com/hrr49-tully/Guitar-Centaur-Reviews-Proxy
  - https://github.com/hrr49-tully/Guitar-Centaur-Add-to-Cart
  - https://github.com/hrr49-tully/Guitar-Centaur-Add-to-Cart-proxy

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Creating the Database
IMPORTANT: for newer mariadb systems, otherwise just use username: 'root' and password: '' in connection.js file:
```sh
sudo mariadb -u root
SET old_passwords=0;
CREATE USER 'student'@'%' IDENTIFIED BY 'password';
ALTER USER 'student'@'%' IDENTIFIED BY 'password';
GRANT ALL on *.* to student;
FLUSH PRIVILEGES;
```
To import the schema run:
```sh
sudo mariadb -u root < schema.sql
```
A "rpmodule" database should be created in your mariadb instance.

### Scripts
Compile client files with:
```sh
npm run client
```

Seeding database:
```sh
npm run seeder
```

Run tests with (server must be running):
```sh
npm run test
```

Run server:
```sh
npm run server
```

Run server, and watch for file changes:
```sh
npm run server-dev
```

### Primary packages
- express
- jquery
- mysql
- react
- react-dom

### File structure
All compiled client files are placed in the "public" folder.
Client dev files are located in the "client" folder. All CSS module files are placed within the "client/css" files.
