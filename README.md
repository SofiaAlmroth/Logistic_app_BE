# Logistic App Backend
A RESTful API for managing orders, sales, inventory, and users in a logistics system. Built with Node.js, Express, and TypeScript.

Frontend repo: [Logistic App Frontend](https://github.com/SofiaAlmroth/logistic_app_FE)

## Tech Stack
- Node.js + Express
- TypeScript
- Prisma + PostgreSQL
- JWT authentication
- CORS for frontend integration

## Features
- CRUD for orders, sales, products, and categories
- User authentication
- Profit and sales tracking

## Setup

```bash
git clone https://github.com/SofiaAlmroth/logistic_app_BE.git
cd logistic_app_BE
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

# Update .env with your database and JWT secret:
```ini
DATABASE_URL=your_postgresql_url
JWT_SECRET=your_secret_key
PORT=5999
```

## Deployment
Use npm run build and npm start in production.
Can be deployed to platforms like Render or Railway.

## API Endpoints
/api/orders

/api/sales

/api/products

/api/categories

/api/users

/api/auth

⚠️ Make sure to enable CORS for your frontend URL.

Feedback and pull requests are welcome!
