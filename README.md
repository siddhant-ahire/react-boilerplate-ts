# React Boilerplate with TypeScript
This is a scalable boilerplate built with React.js and TypeScript, aimed at enterprise-level applications. It provides a streamlined setup for creating highly maintainable, production-ready React applications with integrated testing, linting, formatting, and environment management.

## Table of Contents
1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Available Scripts](#available-scripts)
5. [Folder Structure](#folder-structure)
6. [Environment Setup](#environment-setup)
7. [Running the Project](#running-the-project)
8. [Building for Production](#building-for-production)
9. [Linting & Formatting](#linting--formatting)
10. [Contributing](#contributing)

## Features

- **TypeScript**: Strongly typed JavaScript to enhance code reliability.
- **React.js**: Popular frontend library for building user interfaces.
- **React Router**: Handling navigation with ease.
- **React Query**: Powerful data fetching and caching solution.
- **React Hook Form + Yup**: Manage forms and validations easily.
- **State Management**: `zustand` for lightweight state management.
- **Axios**: For making HTTP requests.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **ESLint + Prettier**: Code linting and formatting.
- **Jest & React Testing Library**: Unit testing and component testing.
- **Environment-based configuration**: Development, staging, and production environments.
- **Husky + lint-staged**: Pre-commit hooks to enforce linting before committing code.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16+)
- [npm](https://www.npmjs.com/) (version 7+)
- [Git](https://git-scm.com/)

## Installation
Clone the Repository:
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/siddhant-ahire/react-boilerplate-ts.git

2. **Install Dependencies:**
   ```bash
    cd react-boilerplate-ts
    npm install

## Available Scripts
In the project directory, you can run:
  ```npm install```

Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

```npm run build```
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

```npm test```
Launches the test runner in the interactive watch mode.
You can run unit and integration tests using Jest and React Testing Library.

```npm run lint```
Lints your code using ESLint.
This helps in maintaining a clean and error-free codebase.

```npm run format```
Formats the code in src/ folder using Prettier.

```npm run eject```
Removes the react-scripts abstraction. Note: this is irreversible!

Environment-based Commands
These commands are used to run/build the project with different environment configurations:
```
npm run start:dev

npm run start:staging

npm run start:prod

npm run build:dev

npm run build:staging

npm run build:prod
```
These commands use the env-cmd package to load specific environment variables.

## Folder Structure
```
react-boilerplate-ts/
├── .husky/              #development github actions
├── node_modules/
├── public/
├── src/
│   ├── assets/          # Static files like images, fonts, etc.
│   ├── components/      # Reusable React components
|   ├     ├──atoms
|   ├     ├──molecules
|   ├     ├──organisms
|   ├     ├──pages
|   ├     ├──template
│   ├── config/          # Axios instance, theme...
│   ├── hooks/           # Custom hooks
│   ├── routes/          # Routes of pages
│   ├── services/        # API services (e.g., Axios)
│   ├── store/           # Zustand store for state management
│   ├── styles/          # css files
│   ├── types/           # Types for typescript
│   ├── utils/           # Utility functions/helpers
│   └── index.tsx        # Main application component
├── .env.devlopment      # Environment variables for development
├── .env.production      # Environment variables for production
├── .env.staging         # Environment variables for staging
├── .eslintrc.js         # ESLint configuration
├── .prettierrc.js       # Prettier configuration
├── eslint.config.mjs    # Eslint configuration
├── package.json         # project configuration / package list
├── README.md            # Readme doc file for github
├── tailwind.config.js   # Tailwind css configuration
└── tsconfig.json        # Typescript configuration
```
## Environment Setup
You need to configure environment variables in .env files for different environments like development, staging, and production.

Create .env.development, .env.staging, and .env.production files based on the following example:
# Example .env file
```
REACT_APP_API_URL=https://dev.example.com/api
REACT_APP_ENV=development
REACT_APP_CLIENT_ID=example.apps.googleusercontent.com
```
## Running the Project

```
For development:
npm run start:dev

For staging:
npm run start:staging or npm run start

For production:
npm run start:prod
```

## Building for Production
To build the app for production, run:```npm run build:prod```
This will create an optimized production build in the build/ directory.

## Linting & Formatting
To run ESLint and auto-fix issues:```npm run lint```

To format your code using Prettier:```npm run format```

## Contributing
Contributions are welcome! Please submit a pull request with your changes, and ensure you follow the existing coding standards.

