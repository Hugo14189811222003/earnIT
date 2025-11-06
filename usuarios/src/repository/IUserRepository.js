/**
 * Interface definition for a User Repository.
 * All concrete repository implementations must adhere to this contract.
 */
class IUserRepository {
    // In JavaScript, interfaces are conceptual.
    // We define the expected methods that must be implemented.

    /** Fetches a user by their unique ID. */
    async findById(id) {
        throw new Error("Method 'findById()' must be implemented.");
    }

    /** Fetches all users who are active. */
    async findAllActive() {
        throw new Error("Method 'findAllActive()' must be implemented.");
    }

    /** Saves a new user to the persistence layer. */
    async save(user) {
        throw new Error("Method 'save()' must be implemented.");
    }

    async createUser(user) {
        throw new Error("Method 'createUser()' must be implemented.");
    }

    async getUserByEmail(email) {
        throw new Error("Method 'getUserByEmail()' must be implemented.");
    }

    async getAllUsers() {
        throw new Error("Method 'getAllUsers()' must be implemented.");
    }

    async updateUser(id, user) {
        throw new Error("Method 'updateUser()' must be implemented.");
    }

    async deleteUser(id) {
        throw new Error("Method 'deleteUser()' must be implemented.");
    }
}

module.exports = IUserRepository;