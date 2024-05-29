## CRUD Express REST API with Profile Page

This project is a full-fledged CRUD (Create, Read, Update, Delete) REST API built with Express.js and a dynamic profile page on the frontend.

### Project Overview

This application aims to enhance your skills in both backend and frontend development by combining user registration, login, profile management, and a REST API. It builds upon foundational knowledge of login and registration pages, extending functionality to include profile editing and deletion.

### Technologies Used

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express.js
* Database: MySQL
* Authentication: JWT (or session-based) (Optional)
* Version Control: Git and GitHub

###  Getting Started

This project requires Node.js, npm (or yarn), and a MySQL database server.

1. Clone the repository:

```bash
git clone https://github.com/NahinAlam001/expressPrac.git
```

2. Install dependencies:

```bash
cd expressPrac
npm install
```

3. Configure the database connection:

* in the backend/app.js

4. Start the development server:

```bash
npm start
```

### Project Structure

```
expressPrac/
  - frontend/  # Frontend code
    - src/
      - components/
      - pages/
      - ... (other frontend directories)
  - backend/  # Backend code
    - controllers/
    - models/
    - routes/
    - ... (other backend directories)
  - .env      # Database connection details
  - package.json  # Project dependencies
  - README.md  # This file
```

### API Documentation

#### Endpoints

* **Registration (POST /api/register)**
  * Creates a new user.
  * Hashes passwords before saving.
* **Login (POST /api/login)**
  * Authenticates users with email and password.
  * Returns a token or session on successful login.
* **Get Profile (GET /api/profile)**
  * Retrieves the logged-in user's profile information.
* **Update Profile (PUT /api/profile)**
  * Updates the user's profile information. (Requires Authentication)
* **Delete Account (DELETE /api/profile)**
  * Deletes the logged-in user's account. (Requires Authentication)
* **Upload Profile Image (POST /api/profile/image)**
  * Uploads and updates the user's profile image. (Requires Authentication) (Optional)

**Note:** Authentication is implemented using JWT (or sessions) for update, delete, and profile image upload endpoints (Optional).

### Frontend Integration

The frontend uses the Fetch API to make HTTP requests to the backend API endpoints. Error handling is implemented for both frontend validations and backend responses.

### Submission Requirements

* **Code Repository:** Submit the code on a public GitHub repository.
* **README:** This file (README.md) with instructions, project structure overview, API documentation.
* **Zip File:** Upload a zip containing all project files.
* **Demo Video:** Record a short video (5-10 minutes) showcasing the application's functionality.

### Grading Criteria

* Functionality (all features implemented correctly)
* Code Quality (clean, well-organized, commented)
* User Interface (user-friendly and visually appealing)
* Documentation (clear and comprehensive README)
* Error Handling (proper handling on frontend and backend)

### Extra Credit

* Implement password reset functionality, email verification, or profile image cropping.
* Deploy the application to a cloud platform and provide the live URL.
* Implement authentication middleware (JWT or session-based).
* Implement validation middleware for request data.
