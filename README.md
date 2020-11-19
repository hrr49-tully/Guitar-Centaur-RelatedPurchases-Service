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

### Creating DB User
IMPORTANT: for newer mariadb systems, otherwise just use username: 'root' and password: '' in connection.js file:
```sh
sudo mariadb -u root
SET old_passwords=0;
CREATE USER 'student'@'%' IDENTIFIED BY 'password';
ALTER USER 'student'@'%' IDENTIFIED BY 'password';
GRANT ALL on *.* to student;
FLUSH PRIVILEGES;
```

