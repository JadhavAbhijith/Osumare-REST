# Osumare-REST
This project is a basic RESTful API built with Node.js and Express.js, managing a collection of tasks. It implements CRUD operations on in-memory data.

This is a BackEnd based Project.
https://osumare-rest.vercel.app/

## Technologies Used:
* **Node.js:** JavaScript runtime environment.
* **Express.js:** Web application framework for Node.js.
* **Git:** Version control system.
* **GitHub:** Platform for version control and collaboration.
* **VS Code:** Integrated Development Environment (IDE).

## Features:
* **CRUD Operations:** Supports Create, Read, Update, Delete for tasks.
* **In-Memory Data Storage:** Tasks are stored in memory (no database required).
* **Validation:** Basic validation ensures required task properties (e.g., title, description) are present.
* **Error Handling:** Gracefully handles unexpected issues.
* **Appropriate Status Codes:** Uses correct HTTP status codes (200 for success, 404 for not found, 400 for bad requests).

## Endpoints:
* `GET /tasks`: Retrieve all tasks.
* `GET /tasks/:id`: Retrieve a specific task by ID.
* `POST /tasks`: Create a new task.
* `PUT /tasks/:id`: Update an existing task by ID.
* `DELETE /tasks/:id`: Delete a task by ID..

## Bonus Features Implemented:
* **Pagination:** Implemented for the `GET /tasks` endpoint.
* **Sorting & Filtering:** Added options for task retrieval.
* **Authentication & Authorization:** Mechanisms included for protecting certain endpoints.

## Setup & Running:
1.  **Clone the repository:** `git clone https://github.com/JadhavAbhijith/Osumare-REST`
2.  **Navigate to project:** `cd osumare-backend`
3.  **Start the server:** `npm run dev`
4.  **Test:** Use tools like Postman or curl to test the API.

