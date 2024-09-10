# User Fullstack Application

This repository contains a full-stack application with a React frontend (`user-frontend`) and a Spring Boot backend (`user-backend`). The backend provides APIs that the frontend consumes to display data and perform operations.

## Getting Started

Follow the instructions below to set up and run the application locally.

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (Version 18 or later)
- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html) (Version 17 or later)
- [Maven](https://maven.apache.org/) (for building the Spring Boot backend)
- [Docker](https://www.docker.com/) (if you want to run the applications in containers)

### Clone the Repository

```bash
git clone https://github.com/bansikah22/user-fullstack.git
cd user-fullstack
```
## Running the Frontend
**1. Navigate to the user-frontend directory:**

```bash
cd user-frontend
```
**2. Install dependencies:**
```bash
npm install
```
**1. Run the React development server:**

```bash
npm start
```
The React application will run on http://localhost:3001

## Running the Backend
**1. Open a new terminal and navigate to the user-backend directory:**

```bash
cd user-backend
```
**2. Build the Spring Boot application using Maven:**

```bash
mvn clean install
```
**3. Run the Spring Boot application:**

```bash
java -jar target/user-0.0.1-SNAPSHOT.jar
```
The backend will be accessible at http://localhost:8082

## Running with Docker
### Build Docker Images
**1. Build the Docker images for both the frontend and backend:**

```bash
docker build -t user-frontend:1.0 ./user-frontend
docker build -t user-backend:1.0 ./user-backend
```
### Run Docker Containers
**2. Run the backend container:**

```bash
docker run -d -p 8082:8082 user-backend:1.0
```
**3. Run the frontend container:**

```bash
docker run -d -p 3001:80 user-frontend:1.0
```
## Access the Application
Frontend: http://localhost:3001

Backend: http://localhost:8082



## Contributing
Contributions are welcome! Please create a pull request for any improvements or bug fixes.

## License
This project is licensed under the [MIT License](./LICENSE).
