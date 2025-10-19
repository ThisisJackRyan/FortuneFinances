# Fortune Finances

## An AI-powered fortune cookie delivering personalized financial advice.

---

## Table of Contents

*   [Overview](#overview)
*   [Features](#features)
    *   [AI-Powered Financial Guidance](#ai-powered-financial-guidance)
    *   [Secure User Authentication](#secure-user-authentication)
    *   [Personalized History Tracking](#personalized-history-tracking)
    *   [Modern Web Stack](#modern-web-stack)
*   [Usage](#usage)
*   [Getting Started](#getting-started)

---

## Overview

Fortune Finances is a web application designed to provide users with short, wise financial advice, similar to a fortune cookie. It generates fortunes based on AI analysis, optionally incorporating user input and current economic themes. The application offers a personalized experience with secure user authentication and the ability to track past advice.

## Features

### AI-Powered Financial Guidance

At its core, Fortune Finances utilizes OpenAI to generate unique and concise financial advice. Users can interact with a digital fortune cookie, and the application's backend API will fetch a tailored fortune, often influenced by the current economy or specific user prompts.

### Secure User Authentication

The application integrates Auth0 for robust user authentication. This enables users to securely log in, creating a personalized environment where their interactions and financial advice history can be managed individually.

### Personalized History Tracking

Authenticated users can access a comprehensive history of their received financial fortunes. This feature, powered by Firebase Firestore, stores advice specific to each user, allowing them to revisit past guidance. Users also have the option to clear their history.

### Modern Web Stack

Fortune Finances is built using a modern development stack centered on Next.js and React for a dynamic and responsive user interface. Styling is efficiently handled with Tailwind CSS for utility-first design, complemented by custom fonts and Font Awesome icons for visual richness.

## Usage

1.  **Access the Application**: Navigate to the Fortune Finances application in your web browser.
2.  **Log In**: Use the authentication prompts to log in or create an account via Auth0. This step is essential for tracking your fortune history.
3.  **Interact with the Cookie**: On the main page, engage with the digital fortune cookie. You may be prompted for input to personalize your fortune.
4.  **Receive Advice**: After interaction, the application will display your unique financial fortune.
5.  **View History**: Click on the history icon (typically a clock or rotate arrow) to open the sidebar. Here, you can review all the financial advice you have received. You also have the option to clear your personal history.

## Getting Started

To run Fortune Finances locally, follow these steps:

1.  **Clone the repository:**
    Clone the project repository to your local machine.
2.  **Install dependencies:**
    Navigate to the project directory in your terminal and install the required packages:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root of your project. You will need to configure the following:
    *   Obtain an API key from OpenAI and add it as an environment variable named `OPENAI_API_KEY`.
    *   Configure your Auth0 environment variables, which typically include `AUTH0_SECRET`, `AUTH0_BASE_URL`, `AUTH0_ISSUER_BASE_URL`, `AUTH0_CLIENT_ID`, and `AUTH0_CLIENT_SECRET`.
    *   For Firebase, ensure any sensitive keys are managed as environment variables, although a configuration is present in the codebase.
4.  **Run the development server:**
    Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.