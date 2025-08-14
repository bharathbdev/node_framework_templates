const userRepository = require('../repositories/userRepository');

class UserService {
  // Create a new user
  async createUser(userData) {
    try {

      // Business logic: Validate age
      if (userData.age && (userData.age < 0 || userData.age > 120)) {
        throw new Error('Age must be between 0 and 120');
      }

      // Create user
      const user = await userRepository.create(userData);
      
      // Remove sensitive data from response
      const userResponse = user.toObject();
      return userResponse;
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }

  

  // Get all users with pagination
  async getAllUsers(query = {}, options = {}) {
    try {
      const users = await userRepository.findAll(query, options);
      const total = await userRepository.count(query);
      
      return {
        users,
        pagination: {
          total,
          page: options.page || 1,
          limit: options.limit || 10,
          totalPages: Math.ceil(total / (options.limit || 10))
        }
      };
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }

}

module.exports = new UserService();
