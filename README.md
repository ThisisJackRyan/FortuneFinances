# Fortune Finances

## AI Fortune Cookie for Financial Advice

## Table of Contents
*   [Introduction](#introduction)
*   [Features](#features)
*   [Technologies](#technologies)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Environment Variables](#environment-variables)
    *   [Running the Application](#running-the-application)
*   [Usage](#usage)

### Introduction
Fortune Finances is a web application that provides AI-generated financial advice in the style of a fortune cookie. Users can input their financial situation or questions and receive short, wise fortunes. The application tracks user history for a personalized experience.

### Features
*   **AI-Powered Financial Fortunes:** Generate concise, context-aware financial advice using the OpenAI API.
*   **User Authentication:** Secure user login and management powered by Auth0.
*   **Personalized History:** Store and retrieve past financial fortunes for authenticated users using Firebase Firestore.
*   **Interactive Cookie Interface:** A dynamic UI component simulates cracking a fortune cookie to reveal advice.
*   **Responsive Design:** Styled with Tailwind CSS for a modern and adaptable user experience.

### Technologies
*   **Framework:** Next.js 15
*   **Language:** TypeScript
*   **Frontend:** React
*   **Authentication:** Auth0
*   **AI Integration:** OpenAI API
*   **Database:** Firebase Firestore
*   **Styling:** Tailwind CSS
*   **Icons:** Font Awesome

### Getting Started

#### Prerequisites
*   Node.js (LTS version recommended)
*   npm or Yarn

#### Installation
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

#### Environment Variables
Create a `.env.local` file in the root of your project and add the following:
```
# OpenAI API Key
OPENAI_API_KEY="YOUR_OPENAI_API_KEY"

# Auth0 Configuration
AUTH0_SECRET="YOUR_AUTH0_SECRET"
AUTH0_BASE_URL="http://localhost:3000" # or your deployed URL
AUTH0_ISSUER_BASE_URL="YOUR_AUTH0_ISSUER_BASE_URL"
AUTH0_CLIENT_ID="YOUR_AUTH0_CLIENT_ID"
AUTH0_CLIENT_SECRET="YOUR_AUTH0_CLIENT_SECRET"
```
*Note: The Firebase configuration is embedded directly within `firebase-config.js` for quick setup, but for a production environment, it is recommended to manage API keys and other sensitive information as environment variables.*

#### Running the Application
To start the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Usage
Fortune Finances provides a simple and engaging way to receive financial advice:
1.  **Login:** Users can log in via Auth0 to personalize their experience and save their fortune history.
2.  **Input:** On the main page, enter a brief description of your financial situation or a question into the provided input field.
3.  **Generate Fortune:** Interact with the "Crack Cookie" button. The application will process your input using AI and generate a unique financial fortune.
4.  **View History:** Authenticated users can access a sidebar to view their past fortunes.
5.  **Clear History:** The history can be cleared from the sidebar for authenticated users.