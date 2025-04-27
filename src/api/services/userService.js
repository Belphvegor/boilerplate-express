const prisma = require('../../utils/prisma');

// Get all users
const getAllUsers = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
      // Exclude password for security
    }
  });
};

// Get user by ID
const getUserById = async (id) => {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
      // Exclude password for security
    }
  });
};

// Create a new user
const createUser = async (userData) => {
  return prisma.user.create({
    data: userData,
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
      // Exclude password for security
    }
  });
};

// Update a user
const updateUser = async (id, userData) => {
  return prisma.user.update({
    where: { id },
    data: userData,
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
      // Exclude password for security
    }
  });
};

// Delete a user
const deleteUser = async (id) => {
  await prisma.user.delete({
    where: { id }
  });
  return true;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};