
This demo implements a very simple API for books and a frontend that lists books, details, and performs basic actions in a shopping cart

#### How to run
* First install the npm dependencies
```shell script
npm run install
```
* Start the DEV mode of the frontend 
```shell script
npm start 
```
* Start the rest API server 
```shell script
npm run bootServer
```

#### Architecture and performance fixes
1. Introduced a simple `memory-cache` library that provides a cache that loads (only once) the books from the CSV file, instead of every time `GET /api/books` is called
2. The GET endpoints therefore retrieve books and book details by loading from this cache
3. Restructured the folders into components, routes, and api
4. Introduced Jest and Supertest for api endpoint integration testing
5. Used React Hooks (`useState`) to manage internal component state
6. Introduced a `config.js` to enable management of different environment variables for `dev`, `staging`, `production`
7. Added simple error handling for 404 and 500 http errors
8. Fixed the continuous request to `/api/books` in the listing page by fixing the `useEffect deps` parameter

#### How to run the api endpoint tests
```shell script
npm test 
```

#### Considerations and further improvements if more time is I had more free time
1. Introduce a centralized error handling / middleware and logging library
2. Leverage the `memory-cache` to persist cart item data
3. Use reducer to manage actions on the cart
4. Add test to the frontend functionality (ie. actions on the cart)
5. Create Docker and Docker Compose to run both the server and the frontend


