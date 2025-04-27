const userService = require('../services/userService');

// Get all users
const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({ data: users });
  } catch (error) {
    next(error);
  }
};

// Get user by ID
const getUserById = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await userService.getUserById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
};

// Create a new user
const createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const newUser = await userService.createUser(userData);
    res.status(201).json({ data: newUser });
  } catch (error) {
    next(error);
  }
};

// Update a user
const updateUser = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const userData = req.body;
    const updatedUser = await userService.updateUser(userId, userData);
    
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};

// Delete a user
const deleteUser = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const deleted = await userService.deleteUser(userId);
    
    if (!deleted) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};