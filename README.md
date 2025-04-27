# Express PostgreSQL Prisma Boilerplate

A robust RESTful API boilerplate using Express.js, PostgreSQL, and Prisma ORM.

## Features

- Express.js framework
- PostgreSQL database
- Prisma ORM
- REST API endpoints
- Error handling middleware
- Environment configuration
- Development and production scripts
- ESLint and Prettier for code formatting

## Prerequisites

- Node.js (v14+ recommended)
- PostgreSQL
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/express-postgres-prisma-boilerplate.git
   cd express-postgres-prisma-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` file with your database credentials.

4. Generate Prisma client and run migrations:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. For production:
   ```bash
   npm start
   ```

## Project Structure

```
.
├── src/
│   ├── api/
│   │   ├── controllers/      # Request handlers
│   │   ├── middlewares/      # Express middlewares
│   │   ├── routes/           # API routes
│   │   └── services/         # Business logic
│   ├── config/               # Configuration files
│   ├── prisma/               # Prisma schema and migrations
│   ├── utils/                # Utility functions
│   ├── app.js                # Express app
│   └── server.js             # Entry point
├── .env.example              # Example environment variables
├── .eslintrc                 # ESLint configuration
├── .prettierrc               # Prettier configuration
├── package.json              # Project metadata and scripts
└── README.md                 # Project documentation
```

## API Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user
- `GET /health` - Health check endpoint

## Database

This boilerplate uses PostgreSQL with Prisma ORM. The default schema includes:

- User model with basic fields
- Post model with relationship to User

You can modify the schema in `src/prisma/schema.prisma` according to your needs.

## Prisma Commands

- Generate Prisma client: `npm run prisma:generate`
- Create and apply migrations: `npm run prisma:migrate`
- Open Prisma Studio (database GUI): `npm run prisma:studio`

## Error Handling

The application includes centralized error handling with custom middleware that:

- Handles 404 errors for undefined routes
- Provides consistent error responses
- Hides stack traces in production

## Environment Variables

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development, production, test)
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: Secret for JWT (if implementing authentication)
- `JWT_EXPIRES_IN`: JWT expiration period

## Development

- Run in development mode: `npm run dev`
- Lint code: `npm run lint`
- Format code: `npm run format`
- Run tests: `npm run test`

## Production

For production deployment:
1. Set `NODE_ENV=production` in your environment
2. Ensure all environment variables are properly set
3. Run `npm start`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
