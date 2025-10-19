# Fortune Finances

## AI Fortune Cookie for Financial Advice

This repository hosts "Fortune Finances," an interactive Next.js application that provides AI-generated financial advice in the style of a fortune cookie.

### Table of Contents

*   [Introduction](#introduction)
*   [Key Features](#key-features)
    *   [AI-Powered Financial Advice](#ai-powered-financial-advice)
    *   [User Authentication](#user-authentication)
    *   [Personalized History](#personalized-history)
    *   [Tech Stack](#tech-stack)
*   [Usage](#usage)
*   [Getting Started](#getting-started)

### Introduction

Fortune Finances is a web application designed to offer quick, thought-provoking financial insights. Users can interact with a virtual fortune cookie to receive advice tailored to economic conditions, powered by OpenAI.

### Key Features

#### AI-Powered Financial Advice

The core functionality involves an API route that leverages the OpenAI API to generate short, wise financial fortunes. Users can optionally provide input to influence the advice received.

#### User Authentication

Authentication is handled via Auth0, allowing users to have a personalized experience and securely store their data.

#### Personalized History

Authenticated users can view and manage a history of the financial fortunes they have received. This history is persisted using Firebase Firestore, enabling users to revisit past advice.

#### Tech Stack

The application is built with Next.js for a performant and scalable React experience. Styling is managed with Tailwind CSS, ensuring a modern and responsive user interface.

### Usage

1.  **Receive a Fortune**: Click on the fortune cookie displayed on the main page to get a new piece of financial advice.
2.  **Provide Input**: You can enter a message before cracking the cookie to guide the AI's advice.
3.  **View History**: Authenticate with Auth0. Click the history icon (a clock with rotating arrows) to toggle the sidebar and view your past fortunes.
4.  **Clear History**: Within the sidebar, authenticated users can clear their stored fortune history.

### Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone [repository-url]
    cd fortunefinances
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Set up environment variables**:
    Create a `.env.local` file in the root directory and add your API keys. This includes your `OPENAI_API_KEY` and Auth0 credentials.
    ```
    OPENAI_API_KEY=your_openai_api_key
    AUTH0_SECRET=your_auth0_secret
    AUTH0_BASE_URL=http://localhost:3000
    AUTH0_ISSUER_BASE_URL=your_auth0_issuer_base_url
    AUTH0_CLIENT_ID=your_auth0_client_id
    AUTH0_CLIENT_SECRET=your_auth0_client_secret
    ```
    *Note: The Firebase API key is currently hardcoded in `firebase-config.js` but for production use, it's recommended to store it as an environment variable.*

4.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.