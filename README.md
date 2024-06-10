# Express.js Blog Application

This is a simple blog application built using Express.js, allowing users to create, read, update, and delete blog posts. The application uses EJS for templating and supports basic HTML form submissions for CRUD operations.

## Features

- View all blog posts on the home page
- Create a new blog post
- Edit an existing blog post
- Delete a blog post
- View a specific blog post

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node package manager)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/express-blog-app.git

2. Navigate to the project directory:
   ```
   cd express-blog-app
   
3. Install the dependencies:
   ```
   npm install
   
## Running the Application
1. Start the server:
   ```
   npm start
   
2. Open your web browser and go to:
   ```
   http://localhost:3000
## Middleware
  ```
  express.static('public') - Serves static files from the public directory
  bodyParser.urlencoded({ extended: false }) - Parses URL-encoded bodies
  bodyParser.json() - Parses JSON bodies
  methodOverride('_method') - Supports PUT and DELETE methods via query parameter _method
```
## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.