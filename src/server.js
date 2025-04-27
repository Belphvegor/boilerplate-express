require('dotenv').config();
const app = require('./app');
const prisma = require('./utils/prisma');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Connect to database
    await prisma.$connect();
    console.log('Connected to the database successfully');

    // Start express server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

// Handle shutdown gracefully
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Disconnected from the database');
  process.exit(0);
});