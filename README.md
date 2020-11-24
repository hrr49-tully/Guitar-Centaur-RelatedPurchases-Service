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
IMPORTANT: for newer mariadb systems, otherwise just use username: 'root' and password: '' in connection.js file. Modify host and GRANT as needed:
```sh
sudo mariadb -u root
SET old_passwords=0;
CREATE USER 'student'@'localhost' IDENTIFIED BY 'password';
ALTER USER 'student'@'localhost' IDENTIFIED BY 'password';
GRANT ALL on *.* to student;
FLUSH PRIVILEGES;
```
You may also need to run:
```sh
SET PASSWORD FOR 'student'@'localhost' = PASSWORD('password');
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
- All compiled client files are placed in the "public" folder.
- Client dev files are located in the "client" folder. 
- All CSS module files are placed within the "client/css" files.
- All server files are located in the "server" folder.
- All test files are located in the "tests" folder.
- connection.js contains the primary database connection credentials and image file location.


### API Endpoints:
#### /api/getitem
##### GET: /api/getitem?id=[itemId]
###### Parameters:
- id
  -- The item id.
###### Returns:
- Returns all items and their details, if present, when no ID is specified.
- Returns a single item and its details, if an ID is present.
###### Status Codes:
- 200: Items found
- 401: Error, no items found or database connection issue.

#### /api/getrelatedpurchases

##### GET: /api/getrealtedpurchases?id=[itemId]

###### Parameters:
- id
  -- ID is the item ID of the current product page we’re viewing.

###### Returns:
- Returns multiple results from the related table, which have a matching item id in the ‘parent_item_id’ in the ‘related’ table.

###### Status Codes:
- 200: Finds and returns information successfully.
- 401: Generic error code.

#### /api/addrelatedpurchase
##### POST: /api/addrelatedpurchase?pid=[itemId]&iid=[itemId]

###### Parameters:
- pid
  -- Parent id. This should be the item of the main item on the current page.
- iid
  -- Item Id. This should be the item of the small product in the carousel.

###### Returns:
- Insert id, although not necessarily relevant.

###### Status Codes:
- 200: Related purchase added successfully.
- 401: Generic error code.

#### /api/deleterelatedpurchase
##### POST: /api/deleterelatedpurchase?id=[itemId]

###### Parameters:
- id
  -- The id of the record in related tables to delete

###### Returns:
- Nothing

###### Status Codes:
- 200: Related purchase deleted successfully.
- 401: Generic error code.

#### /api/getdetails (extra feature)
##### GET: /api/getdetails?id=[itemId]

###### Parameters:
- id
  -- ID is the item ID of the current product page we’re viewing.

###### Returns:
- All fields with the information from the details schema relating to the item id.

###### Status Codes:
- 200: Finds and returns information successfully.
- 401: Generic error code.

#### /api/adddetails (extra feature)
##### POST: /api/adddetails?iid=[item_id]&overview=[text]&specifications=[text]&coverage=[text]

###### Parameters:
- iid
  -- The id of the item in the items table.
- overview
  -- Bulk text of the item’s overview field. Can be HTML.
- Specifications
  -- Bulk text of the item’s specs field. Can be HTML.
- Coverage
  -- Bulk text of the item’s coverage field. Can be HTML.

###### Returns:
- Nothing

###### Status Codes:
- 200: Created a details record and added the foreign key to the relevant item in the items table.
- 401: Details weren’t added.

#### /api/getratingavg
##### GET: /api/getratingavg?id=[item_id]

###### Parameters:
- iid
  -- The id of the item in the items table.

###### Returns:
- The average rating of the related item id. Should be between 1 and 5.

###### Status Codes:
- 200: Received back any rating average available.
- 401: Bad arguments

#### /api/getratingcount
##### GET: /api/getratingcount?id=[item_id]

###### Parameters:
- iid
  -- The id of the item in the items table.

###### Returns:
- The count of how many ratings exist for the related item id.

###### Status Codes:
- 200: Received back how many ratings there are for the item.
- 401: Bad arguments.

