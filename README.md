# The Virtual Forge Store PWA with Typescript

![image](https://user-images.githubusercontent.com/44005675/193641824-d7dc3c58-6dab-4a9c-95cd-1e2a77094d87.png)


### [Live Demo](https://virtual-forge-store.vallorisolutions.com/ 'Live Demo - Click here!')

## Overview

This is a simple Progressive Web Application with React & Typescript demonstrating a typical real world use case for a shopping cart feature.

### Features

- List of Products with slider for product images (with navigation and pagination).
- Ordering the list by ASC, DESC, Highest price and Lowest price.
- Product details dialog with variant options for the user to choose, and also quantity, showing the subtotal based on the variant price and quantity chosen.
- Shopping cart list synced by global state.
- Responsive version available.

## Tech Stack

- ⚛️ React for declarative component-centric UI (via create-react-app);
- 🏗 Typescript for strong static typing, compilation, and object-oriented programming;
- 💅 Styled-components for component-scoped styling, theme and global styles;
- ⚛️ Redux Toolkit to handle API calls using RTK builder and global store data separated by slices

## Architecture

- 😎 Progressive Web App made with CRA Service Workers
- 📶 Works offline
- 🧭 Can be installed in any device that has the chromium core running in the background (iOS, Android, Linux, Mac, Windows) with standalone feature
- 📐 ESLint for JavaScript linting
- 📦 YARN for build and serve scripts
- ✨ Prettier for automatic code formatting

## Running the app

After cloning this repository, make sure to use node version 16.16.0.
Run:
`$ yarn && yarn serve -s build`

The website will be available at `http://localhost:3000/.
