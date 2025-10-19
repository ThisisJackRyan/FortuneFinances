# Fortune Finances

## An AI-powered Next.js application providing financial advice in a fortune cookie format, with user authentication and history tracking.

## Table of Contents
*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [Getting Started](#getting-started)
*   [Usage](#usage)

## Features
*   **AI Financial Advice**: Generates short, wise financial fortunes inspired by current economic conditions using the OpenAI API.
*   **User Authentication**: Securely authenticates users via Auth0, enabling personalized experiences and fortune history tracking.
*   **Fortune History**: Stores a personalized history of received fortunes in Firebase Firestore, allowing users to review past advice.
*   **Interactive Fortune Cookie UI**: Features a dynamic fortune cookie interface that provides a unique and engaging user experience.
*   **Responsive Sidebar**: A dedicated sidebar displays the user's fortune history and provides an option to clear it.
*   **Modern Styling**: Built with Tailwind CSS for a clean, responsive, and visually appealing user interface.

## Technologies Used
*   **Next.js 15**: The React framework for building full-stack web applications.
*   **React 18**: The JavaScript library for building user interfaces.
*   **Auth0**: For robust user authentication and authorization.
*   **OpenAI API**: Utilized for generating AI-driven financial advice.
*   **Firebase Firestore**: A NoSQL cloud database for storing user-specific fortune history.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **Font Awesome**: For scalable vector icons.
*   **TypeScript**: The primary programming language, offering type safety and improved developer experience.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites
*   Node.js (LTS version recommended)

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/fortunefinances.git
    cd fortunefinances
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Set up environment variables:
    Create a `.env.local` file in the root of the project and add the necessary environment variables for Auth0 and OpenAI.
    *   `OPENAI_API_KEY`: Your API key from OpenAI.
    *   Auth0-related variables (e.g., `AUTH0_SECRET`, `AUTH0_BASE_URL`, `AUTH0_ISSUER_BASE_URL`, `AUTH0_CLIENT_ID`, `AUTH0_CLIENT_SECRET`). Consult the Auth0 Next.js SDK documentation for the full list.
    Firebase configuration is already included in `firebase-config.js`.

### Running the Development Server
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage
1.  **Generate a Fortune**: Click the fortune cookie on the main page to receive a piece of AI-generated financial advice. You can optionally provide a short input to guide the advice.
2.  **User Authentication**: New users will be prompted to log in via Auth0 before their fortune history can be saved.
3.  **View History**: Click the history icon to toggle the sidebar, which displays all your previously received fortunes.
4.  **Clear History**: Within the sidebar, you can click the "Clear" button to delete all your stored fortune history.