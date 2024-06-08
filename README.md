# User Management Dashboard

## Introduction
This is an Angular-based application for managing users. It offers features such as user registration, login, viewing lists of users, and additional functionalities.

## Features
-User registration
-User login
-View all users (only after login)
-Home page with an introduction
-Show/Hide password functionality
-User deletion

## Table of Contents
1. Introduction
2. Features
3. Prerequisites
4. Application Structure
5. Design Decisions
6. Technologies Used
7. Installation
8. Setup
9. Usage
10. Contributing
11. License

## Application Structure
- `src/app/auth`: Contains components and services related to authentication (login and registration).
- `src/app/core/services`: Contains core services such as authentication service.
- `src/app/user`: Contains components related to user management (user list, user details).
- `src/app/home`: Contains the home component.
- `src/app/guards`: Contains route guards to protect routes.
- `src/app/layout`: Contains layout components such as header and footer.
- `src/assets`: Contains static assets such as images and styles.

## Design Decisions
- **Authentication Guard**: Used to protect routes and ensure that only authenticated users can access certain pages.
- **Local Storage**: Used for storing user data and authentication state.
- **Responsive Design**: The application is designed to be responsive and works well on different screen sizes.

## Technologies Used
- Angular
- Bootstrap
- RxJS
- TypeScript

## Features
- User registration
- User login
- View all users (only after login)
- Home page with an introduction

## Prerequisites
- Node.js v14
- Angular CLI

## Application Structure
src/app/auth: Contains components and services related to authentication (login and registration).
src/app/core/services: Contains core services such as authentication service.
src/app/user: Contains components related to user management (user list, user details).
src/app/home: Contains the home component.
src/app/guards: Contains route guards to protect routes.
src/app/layout: Contains layout components such as header and footer.
src/assets: Contains static assets such as images and styles.


## Installation

### Clone the repository
```bash
git clone https://github.com/MariamDZE1/PROJECTS-PORTAL1.git

# Install dependencies
npm install

# Start the application
ng serve



##Registration:

Login:
Use the default admin credentials (email: sh.murjikneli@gmail.com , password: shota123 ) for the first login.

