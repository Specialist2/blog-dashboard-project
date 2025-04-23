# Blog Dashboard Project

## Description
This is a full-stack blog dashboard application built with Node.js and Express. It uses EJS as the templating engine for rendering dynamic views. The application allows users to register, login, create new posts, view posts, and manage their dashboard.

## Features
- User registration and authentication
- Create, read, update, and delete blog posts
- Dashboard to manage user posts
- Responsive and user-friendly interface using EJS templates

## Project Structure
- `server.js`: Main server file that sets up the Express application and routes.
- `utils.js`: Utility functions used across the application.
- `views/`: Contains EJS templates for rendering pages such as home, login, register, dashboard, posts, new post, and individual post views.
- `database.sql`: SQL file for setting up the database schema.
- `secret.js`: Contains secret keys or environment variables (ensure this file is kept secure and not shared publicly).

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blog-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Use the `database.sql` file to create the necessary database and tables.
   - Configure your database connection in the project (check `server.js` or relevant config files).

4. Configure environment variables:
   - Ensure `secret.js` or environment variables are set up with necessary keys and credentials.

## Running the Application

Start the server with:

```bash
node server.js
```

The application will be accessible at `http://localhost:3000` (or the port specified in `server.js`).

## Usage

- Visit the home page to view recent posts.
- Register a new account or login with existing credentials.
- Access the dashboard to create, edit, or delete your posts.
- View individual posts and browse all posts.

## Dependencies

- Express
- EJS
- Other dependencies as listed in `package.json`

## License

This project is licensed under the MIT License.

## Notes

- Keep `secret.js` secure and do not expose sensitive information.
- Customize the database connection and other configurations as needed.
