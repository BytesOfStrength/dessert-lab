# Dessert Lab

### A React + Vite Single Page Application (SPA)

## Description

The **Dessert Lab** is a dynamic web application that demonstrates proficiency in React, Javascript, and CSS. The application allows users to search and external recipe database, manage a personal saved collection of favorite recipes from the database, and create custom notes to their saved recipes.

This project was developed as part of the React programming course to demonstrate:

- **Asynchronous API fetching**: Retrieving and filtering data from an API.
- **State Management**: Handling user favorites and recipe notes across components
- **Routing**: Utilizing "react-router" v7 for routing between pages within a SPA.
- **Optimization**: Using a cache to minimize API calls.

## Tech Stack and Dependencies

- **React 19**: Library for building component-based user interface.
- **VITE**: Build tool which also helps with a fast development server.
- **React Router**: Tool for routing and navigation
- **CSS Modules**: Styling to prevent global styling conflicts.
- **Google Fonts**: Typography using external tool in index.html.
- **React Icons**: Used for icons across the application.

> **Note on DOM Manipulation:** All UI updates are handled via state and props. There is no direct, manual manipulation of the DOM (such as no document.getElementById for updates.)

---

## User Guide: How to use the Dessert Lab:

1. **Search** : Provide at least 3 characters of an ingredient. Press **Search lab** This action fetches the first API request from the recipe database for the discover API.
2. **Explore**: Click **View Recipe** to view full recipe's ingredients and instructions.
3. **Save**: Click the **Favorite** icon to save the recipe to the Collection page.
4. **Research** Go to the **Collection** page to view saved collection of recipes up to 5 entries.
5. **Annotate** Use **Lab Notes** section to add, edit, delete comments for each saved recipe.
6. **Manage** Click **Reset Lab Collection** to clear the entire collection of saved recipes or click **Saved** icon to remove an individual saved recipe from the collection.

---

## Instructions on How to Setup/Install App:

This project was bootstrapped with **Vite**. To run the application locally:

1. **Clone the Repository**
   Use the command below to download a local copy using Bash:
   Use copy and paste under https: on code (green button) on github

   ```bash

   git clone https://github.com/BytesOfStrength/dessert-lab.git

   cd dessert-lab
   ```

2. **Install Dependencies**
  Run this command to install React, Vite, react-router, and React-icons in addition to other dependencies in the package.json file

```bash
npm install
```

3. **Environment Setup**
   Create a `.env.local` file in the root and add: `VITE_API_KEY=1`

4. **Install the Development Server**

   ```bash
   npm run dev
   ```

5. **View App**
   Open browser to local url usually: http://localhost:5173

## API Endpoints and Data Fetching

# API sources

I am thankful for the open-source services and API's that provided the information needed to run the recipe searches for my application.

**Recipe Data** Source: TheMealDB api (powered by TheMealDB) Purpose: open-source recipe database. The data was retrieved in two stages in order to avoid unncessary network traffic and to remain within the limits of the public free tier for educational use.

Credit: TheMealDB provides a public API which provides a recipe database with a free tier for educational use. Visit their website at https://www.themealdb.com/api.php for more information.

### Credentials:

- - **API Key**: This project uses the the free public testing API key =1, provided for educational use by TheMealDB. To make sure the application runs correctly, you must create a `.env.local` file in the root directory and add `VITE_API_KEY=1` to that file.

1. **Discovery Endpoint(Filter by Category)**
   - **Purpose**: Retrieve initial lists of meals based on category
   - **URL**: https://www.themealdb.com/api/json/v1/<API_KEY>/filter.php?c=Dessert
   - **Logic**: This endpoint returns an array of the meal name, the meal's thumbnail image, and id information. The application performs filtering in Home.jsx to match the users's ingredient input.

2. **Detail Endpoint(Filter by ID)**
   - **Purpose**: Retrieve detailed information of an individual recipe such as instructions and ingredients.
   - **URL**: https://www.themealdb.com/api/json/v1/<API_KEY>/lookup.php?i={idMeal}
   - **Logic**: App.jsx manages this fetch. This fetch is triggered when user clicks "View Recipe"button. The results are stored in a cache. If the user views the same recipe again on the Collection page, the app should pull from the cache instead of fetching an additional API call.

   ***

   ### Page Features:

   **Home Page (Home.jsx)** Includes an ingredient search with user feedback and validation. Users can fetch the recipe, view instructions, and also save the recipes to their personal collection on the Collection page. This page uses CSS for styling and Javascript for form with a feedback for the user. the Home Page will show the current number of saved recipes in the user's collection.

   **Collection Page (DessertMaker.jsx)** The collection of saved recipes will be saved on this page. **CRUD** (Create, Read, Update, Delete) can be done with the lab notes section on this page to each recipe. In addition, the user can remove individual saved recipes or reset the entire saved collection of recipes. The responsive design is from Javascript, Css layout, and React with Vite.

   **NotFound page (NotFound.jsx)** This page is the error page if the user types in an invalid route. The page provides a link back to the main application.

   ***

## Copyright and Licensing:

- **Data Source:** Recipe content and images fetched from [TheMealDB](https://www.themealdb.com/)
- **Typography:** Custom fonts provided by Google Fonts
- **React Icons:** UI icons provided by [React Icons](https://react-icons.github.io/react-icons/), licensed under various open-source licenses (MIT, CC by 4.0, etc.)
- **Licensing and Permission:** Code from this repository should not be cloned without giving credit to the original repository

```

```
