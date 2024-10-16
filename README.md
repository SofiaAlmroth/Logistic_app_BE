# Logistic App Backend
This is the backend of the Logistic App, responsible for managing orders, sales, inventory, user authentication, and more. It interacts with the frontend through API endpoints and utilizes a PostgreSQL database for data persistence.

## Tech Stack
- Node.js: JavaScript runtime environment
- Express.js: Web framework for building APIs
- Prisma: ORM (Object-Relational Mapping) for PostgreSQL
- PostgreSQL: Relational database for storing app data

## Features
- Orders Management: Create, update, and delete orders (sales and purchases).
- Sales Management: Track sales, display historical sales data.
- Inventory Management: Manage and update product quantities.
- User Authentication: Register, login, and manage user profiles.
- Categories and Paints Management: Manage categories and paints in the system.

## API Endpoints
The following routes are available through the API:

### Orders
- GET /api/orders: Get a list of all orders (sales and purchases).
- POST /api/orders: Create a new order (sales or purchase).
- PUT /api/orders/
: Update an existing order by ID.
- DELETE /api/orders/
: Delete an order by ID.
### Sales
- GET /api/sales: Get a list of all sales history.
- POST /api/sales: Record a new sale.
- PUT /api/sales/
: Update a sale by ID.
- DELETE /api/sales/
: Delete a sale by ID.
### Users
- POST /api/users: Register a new user.
- GET /api/users/
: Get user profile by ID.
- PUT /api/users/
: Update user profile by ID.
- DELETE /api/users/
: Delete user profile by ID.
### Authentication
- POST /api/auth/login: Authenticate user and generate JWT token.
- POST /api/auth/register: Register a new user.
### Categories
- GET /api/categories: Get a list of all categories.
- POST /api/categories: Add a new category.
- PUT /api/categories/
: Update a category by ID.
- DELETE /api/categories/
: Delete a category by ID.
### Paints
- GET /api/paints: Get a list of all paints.
- POST /api/paints: Add a new paint.
- PUT /api/paints/
: Update a paint by ID.
 -DELETE /api/paints/
: Delete a paint by ID.


##Environment Variables
To run this project, you will need to set the following environment variables in your .env file:
```env
POSTGRES_PRISMA_URL="postgres://default:Ur0Qj2dyncfK@ep-plain-paper-a2hzqlin-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15"
JWT_SECRET="jwtSecretPass"
PORT=5999
```

## Installation and Setup
Clone the repository:

```bash
git clone https://github.com/SofiaAlmroth/logistic_app_BE.git
cd logistic_app_BE
```

## Install dependencies:
```bash
npm install
```

### Set up PostgreSQL Database
Make sure you have PostgreSQL installed and running. Then, configure the database connection string in the .env file under the POSTGRES_PRISMA_URL variable.

### Run Prisma Migrations: Ensure your database is set up with the necessary schema by running:
```bash
npx prisma migrate dev
```

### Start the server: Start the development server by running:
```bash
npm start
```

### The backend will be running on http://localhost:5999.

## Deployment
To deploy the backend, follow the same steps, ensuring the environment variables are correctly set for your production environment. You can deploy on platforms like Heroku, Vercel, or any cloud hosting that supports Node.js and PostgreSQL.

## Project Status
This project is under development. The current database is empty, and some functionalities might not work as expected until the database and backend are fully configured.

## Future Improvements
- Enhanced Error Handling: Add robust error handling for better debugging and production-level logging.
- User Roles & Permissions: Implement role-based access control (RBAC) for different user roles.
- Caching: Introduce caching mechanisms for API responses to improve performance.
- API Documentation: Provide OpenAPI (Swagger) documentation for all endpoints.
- React Query Integration: Add React Query in the frontend to handle server-side data fetching and caching in real-time.
