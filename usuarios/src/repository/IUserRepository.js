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

    async createUser({ nombre, email, password }) {
        throw new Error("Method 'createUser()' must be implemented.");
    }

    async getUserByEmail(email) {
        throw new Error("Method 'getUserByEmail()' must be implemented.");
    }

    async getAllUsers() {
        throw new Error("Method 'getAllUsers()' must be implemented.");
    }

    async updateUser(id_usuario, { nombre, email, password }) {
        throw new Error("Method 'updateUser()' must be implemented.");
    }

    async deleteUser(id) {
        throw new Error("Method 'deleteUser()' must be implemented.");
    }
}

module.exports = IUserRepository;