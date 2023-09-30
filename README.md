# E-Waste Facility Locator

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [Wireframe](#wireframe)

## Overview

The E-Waste Facility Locator is a web application that helps users find the nearest e-waste collection and recycling facilities. It also provides educational resources on the harmful components of e-waste and their environmental impact. Users can earn credits by responsibly disposing of e-waste.


## Features

- **Locator:** Find the nearest e-waste collection and recycling facilities on a map.
- **Educational Pop-ups:** Learn about the harmful components of e-waste and their effects on the environment and health.
- **Credit System:** Earn credits by correctly disposing of e-waste, redeemable for rewards.
- **User Authentication:** Secure user accounts with OAuth 2.0 authentication.
- **Upload E-Waste:** Submit e-waste information and schedule pickups.
- **Partnerships:** Highlight partnerships and sponsors.
- **Blog:** Read articles on the effects of e-waste and recycling.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Passport.js with OAuth 2.0
- **Maps:** Google Maps API
- **Styling:** Sass
- **Icons:** Material-UI icons

## Installation

1. Clone this repository.
2. Install Node.js and npm if not already installed.
3. Navigate to the project directory.
4. Run `npm install` to install dependencies for both the frontend and backend.
5. Set up your MongoDB database and add the connection URI in the `.env` file.
6. Configure OAuth 2.0 credentials for authentication.

## Usage

- Start the development server by running `npm start` in the root directory.
- Access the website in your browser at `http://localhost:3000`.
- Explore the different features, including locating facilities, reading educational content, and managing your e-waste.

## Authentication

This project uses OAuth 2.0 for authentication. You can configure the authentication provider (e.g., Google, Facebook) by following their respective documentation. Make sure to add your OAuth client credentials in the `.env` file.

## Contributing

We welcome contributions! If you'd like to contribute to this project, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## Wireframe

The link to our wireframe which shows us how our application is going to look like - https://www.canva.com/design/DAFv2Nzi-ec/tplhPwi9cY3_nH5Bew5BSQ/edit?utm_content=DAFv2Nzi-ec&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
