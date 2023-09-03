
# Node.js Contacts and Users API

Welcome to the Node.js Contacts and Users API repository! This powerful and secure backend API is designed to facilitate Contact and User management for your applications. It's built using Node.js, Express.js, and MongoDB, ensuring robust functionality and data integrity.


## Features

 User Registration and Login:
- Users can create accounts securely with encrypted passwords.
- Login is protected with JSON Web Tokens (JWT) for authentication.


User Authentication and Authorization:    
- JWT-based authentication ensures only logged-in users can access protected routes.
- Users are authorized to perform CRUD operations only on their own contacts.

Contact Management:
- Full CRUD operations (Create, Read, Update, Delete) for contacts.
- Users can create, read, update, and delete their own contacts.
- Contacts are associated with the user who created them for precise control.

Password Hashing:
- User passwords are securely hashed using industry-standard techniques.
- This ensures the safety of user credentials.

Token-Based Security:
- JSON Web Tokens (JWT) are used to secure API endpoints.
- Tokens expire after a defined period, enhancing security

Error Handling:
- Robust error handling ensures a smooth user experience even in unexpected scenarios.
- Clear and informative error messages for ease of debugging.
## Getting Started:

To use this API, follow these steps:

#### Install Dependencies:
```bash
  npm install
  cd my-project
```
#### Configuration:
- Create a .env file to configure environment variables, including your MongoDB connection URI, PORT and JWT secret.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_URL`

`JWT_SECRET`


## Feedback

If you encounter any issues or have suggestions for improvements, please open an issue on this repository. We appreciate your feedback!

# Happy coding!