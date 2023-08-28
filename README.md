## Commit History App
This simple web application allows you to fetch and display commit history from a GitHub repository. The project is divided into two main parts: the backend API built with NestJS and the frontend UI built with React.

## Backend (NestJS)
The backend API is responsible for fetching commit history from a GitHub repository using the GitHub API. It provides an endpoint that returns a list of commits along with their details.

## Setup and Installation
Clone the repository: git clone <repository-url>
Navigate to the backend directory: cd backend
Install dependencies: npm install
Set up environment variables:
Create a .env file based on the .env.example file.
Provide your GitHub personal access token as GITHUB_TOKEN in the .env file.
Run the development server: npm run start:dev
The backend API will be accessible at http://localhost:5000.
Frontend (React)
The frontend UI lets users view and search commit history from the backend API. It provides a search bar to filter commits based on commit messages.

## Setup and Installation
Navigate to the frontend directory: cd frontend
Install dependencies: npm install
Run the development server: npm run start
The frontend UI will be accessible at http://localhost:3000.
## Features
Displays a list of commits with author, date, and commit message.
Supports pagination to navigate through commit history.
Provides a search bar to filter commits by commit message.
Contributing
Feel free to contribute to this project by opening issues, submitting pull requests, or providing suggestions.

## License
This project is licensed under the MIT License.
