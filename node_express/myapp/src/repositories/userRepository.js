const User = require('../models/User');

class UserRepository {
  // Create a new user
  async create(userData) {
    try {
      const user = new User(userData);
      return await user.save();
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

 

  // Find all users
  async findAll(query = {}, options = {}) {
    try {
      const { page = 1, limit = 10, sort = { createdAt: -1 } } = options;
      const skip = (page - 1) * limit;

      return await User.find(query)
        .sort(sort)
        .skip(skip)
        .limit(limit);
    } catch (error) {
      throw new Error(`Error finding users: ${error.message}`);
    }
  }


  // Count users
  async count(query = {}) {
    try {
      return await User.countDocuments(query);
    } catch (error) {
      throw new Error(`Error counting users: ${error.message}`);
    }
  }
}

module.exports = new UserRepository();
