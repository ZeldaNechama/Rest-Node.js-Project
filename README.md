# Rest-Node.js-Project
# Business Management System

## Description
This project serves as the backend for a business management application. It is built using Node.js with Express and follows a REST architecture. The project is designed to manage various aspects of a small business, including creating and managing business entities, products, and meetings. Authentication is implemented to ensure that only authorized users can perform certain actions.

## Technologies Used
- Node.js
- Express.js
- MongoDB (using Mongoose)
- log4js for logging
- bcrypt for password hashing
- dotenv for environment variables
- JWT for authentication

## Project Structure
The project is structured into several directories to organize the code cleanly:
- `controllers/`: Contains the controller files that handle the HTTP requests and responses.
- `services/`: Contains the service files that handle the business logic.
- `models/`: Contains the Mongoose models for MongoDB.
- `middlewares/`: Contains the middleware files for authentication, authorization, and logging.
- `routes/`: Contains the route files that define the endpoints.
- `config/`: Contains the configuration files such as database configuration.

## Features
1. **Authentication and Authorization**
   - Sign up and sign in with username and password.
   - Passwords are stored in the database in a hashed format using bcrypt.
   - JWT is used for authenticating users.
   - Middleware to protect routes and ensure the user is authenticated.
   - Authorization to ensure only admin users can perform certain actions.

2. **CRUD Operations**
   - Create, read, update, and delete businesses, products, and meetings.
   - Middleware to log every CRUD operation.

3. **Logging**
   - Uses log4js for logging.
   - Logs are written to a file and can be viewed by downloding log.log file.

4. **Error Handling**
   - Global error handling to catch and respond with appropriate error messages.

5. **Environment Variables**
   - Configuration through `.env` file.

## Installation
1. Clone the repository
   ```bash
   git clone https://github.com/ZeldaNechama/Rest-Node.js-Project.git
2. Install dependencies
   ```bash
   npm install
3. Create a .env file in the root directory of the project.  
  <mark>Ensure the `.env` file is placed in the root directory of your project.</mark>  
    Add the following environment variables to it:
    ```bash
      TOKEN_KEY=AddYourKeyToken
      MONGODB_URI=mongodb://localhost:27017/my_database
      PORT=3000 
4. Run the server
   ```bash
   npm run dev
   
## API Endpoints
# Business
POST /api/business: Create a new business.
PUT /api/business/:id: Update an existing business.
DELETE /api/business/:id: Delete a business.
# Services
POST /api/service: Create a new service.
PUT /api/service/:id: Update an existing service.
DELETE /api/service/:id: Delete a service.
# Meeting
POST /api/meeting: Create a new meeting.
PUT /api/meeting/:id: Update an existing meeting.
DELETE /api/meeting/:id: Delete a meeting.
# User
POST /api/user: Create a new user.
# Auth
POST /api/auth/signup: Sign up a new user.
POST /api/auth/signin: Sign in an existing user.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests for any bugs or feature requests you may have.

## License

This project is licensed under the [MIT License](LICENSE).