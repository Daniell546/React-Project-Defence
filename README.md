# Softuni react project defence

## **Perfume Store Web Application**

***This web application is an online perfume store built using React for the front-end and Node.js, Express.js, MongoDB (with Mongoose), JWT, and Bcrypt for the back-end. It allows users to create and browse perfumes, register or log in, add perfumes to their cart, write comments for every perfume and make purchases.***


### 1. Features

    Dashboard: Displays a collection of featured perfumes.

    Search: Allows users to search for perfumes by text and criteria.

    Authentication: Users can register,log in or log out securely using JWT, localstorage based authentication.

    User Profile: Authenticated users can view their profile information It also displays user's own perfume posts.

    Perfume Management: Authenticated users can create, edit, and delete their own articles, which contain perfume details such as brand, model, image URL, and short description.

    Cart: Authenticated users can add perfumes to their cart, view the total price based on the quantity and price of the selected perfumes, and press to checkout button.

### 2. Technologies Used

    -Front-end:
        React: A front-end web application library.
        HTML/CSS: Markup and styling for the user interface.
        JWT Authentication: Secure user authentication using JSON Web Tokens.
        Animations with 'react-toastify'

    -Back-end:
        Node.js: JavaScript runtime for server-side development.
        Express.js: Web application framework for Node.js.
        MongoDB: NoSQL database for storing user information, perfume details, and cart items.
        Mongoose: MongoDB object modeling tool for Node.js.
        Bcrypt: Password hashing for secure authentication.

### 3. Installation 

    - Clone the repository: https://github.com/Daniell546/React-Project-Defence.git
    - Open two terminals and navigate to the front-end(app) and to back-end(server):
        - cd ./client
        - cd ./server
    - Install dependencies for both the client and server:
        - run the command: npm i on both terminals
    - Run the project:
        - type npm run dev in the client directory 
        - type npm start in the server directory
        - Open a web browser and navigate to http://localhost:5173 to view the application.

### 4. License

    This project is licensed under the MIT License - see the LICENSE file for details.

### 5. Acknowledgments

    This project was inspired by the need for an easy-to-use online perfume store.
    Thanks to React, Node.js, Express.js, and MongoDB for providing powerful tools for web development.